"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Component = /*#__PURE__*/function () {
  function Component(element) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Component);

    _defineProperty(this, "$data", void 0);

    _defineProperty(this, "$element", void 0);

    this.$element = element;
    this.$data = data;
    this.setElements();
    this.render();
    this.setEvents();
  }

  _createClass(Component, [{
    key: "setElements",
    value: function setElements() {}
  }, {
    key: "setTemplate",
    value: function setTemplate() {
      return '';
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "setEvents",
    value: function setEvents() {}
  }]);

  return Component;
}();

exports["default"] = Component;
//# sourceMappingURL=Component.js.map