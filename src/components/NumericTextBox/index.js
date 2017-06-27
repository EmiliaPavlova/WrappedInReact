import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import deepDiff from 'deep-diff';
import kendo from 'kendo-ui-core/js/kendo.numerictextbox.js';
import styles from '@telerik/kendo-theme-default/styles/example/main.d.ts';

class NumericTextBox extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.events) {
            this.bindEventsToKendoWidget(nextProps.events);
        }

        if (this.widgetInstance.setOptions) {
            if (nextProps.options) {
                this.widgetInstance.setOptions(nextProps.options);
            }
        }

        if (nextProps.methods) {
            if (deepDiff(nextProps.methods, this.props.methods)) {
                this.callKendoWidgetMethods(nextProps.methods);
            }
        }

        if (nextProps.unbindEvents) {
            if (deepDiff(nextProps.unbindEvents, this.props.unbindEvents)) {
                this.unbindEventsToKendoWidget(nextProps.unbindEvents);
            }
        }

        if (nextProps.triggerEvents) {
            if (deepDiff(nextProps.triggerEvents, this.props.triggerEvents)) {
                this.triggerKendoWidgetEvents(nextProps.triggerEvents);
            }
        }
    }

    componentDidMount() {
        var elementNode = ReactDOM.findDOMNode(this);

        if (this.props.selector) {
            elementNode = elementNode.querySelector(this.props.selector);
        }

        this.widgetInstance = new kendo.ui.NumericTextBox(elementNode, this.props.options);
        this.props.events ? this.bindEventsToKendoWidget(this.props.events) : null;
        this.props.methods ? this.callKendoWidgetMethods(this.props.methods) : null;
        this.props.triggerEvents ? this.triggerKendoWidgetEvents(this.props.triggerEvents) : null;
        this.props.unbindEvents ? this.unbindEventsToKendoWidget(this.props.unbindEvents) : null;
    }

    triggerKendoWidgetEvents(events) {
        events.forEach((event) => {
            this.widgetInstance.trigger(event);
        }, this);
    }

    bindEventsToKendoWidget(events) {
        Object.keys(events).forEach((event) => {
            this.widgetInstance.bind(event, events[event]);
        }, this);
    }

    unbindEventsToKendoWidget(events) {
        events.forEach((event) => {
            this.widgetInstance.unbind(event);
        }, this);
    }

    callKendoWidgetMethods(methods) {
        Object.keys(methods).forEach((method) => {
            this.widgetInstance[method](...methods[method])
        }, this);
    }

    shouldComponentUpdate() { return false; }

    componentWillUnmount() {
        this.widgetInstance.destroy();
    }

    render() {
        debugger;
        return (
            <div className={styles.example}>
                <input />
            </div>
        );
    }
};

export default NumericTextBox;
