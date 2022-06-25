"use strict";
// Copyright (c) 2018-2022 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDialog = void 0;
const clsx_1 = __importDefault(require("clsx"));
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const util_1 = require("../util");
const version_1 = require("../version");
const LinkDialog_css_1 = __importDefault(require("./LinkDialog-css"));
const QRCode_1 = require("./QRCode");
const Spinner_1 = require("./Spinner");
const LinkDialog = props => {
    const [isContainerHidden, setContainerHidden] = (0, hooks_1.useState)(!props.isOpen);
    const [isDialogHidden, setDialogHidden] = (0, hooks_1.useState)(!props.isOpen);
    (0, hooks_1.useEffect)(() => {
        const { isOpen } = props;
        const timers = [
            window.setTimeout(() => {
                setDialogHidden(!isOpen);
            }, 10)
        ];
        if (isOpen) {
            setContainerHidden(false);
        }
        else {
            timers.push(window.setTimeout(() => {
                setContainerHidden(true);
            }, 360));
        }
        return () => {
            timers.forEach(window.clearTimeout);
        };
    }, [props.isOpen]);
    return ((0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-link-dialog-container", props.darkMode && "-cbwsdk-link-dialog-container-dark", isContainerHidden && "-cbwsdk-link-dialog-container-hidden") },
        (0, preact_1.h)("style", null, LinkDialog_css_1.default),
        (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-link-dialog-backdrop", isDialogHidden && "-cbwsdk-link-dialog-backdrop-hidden") }),
        (0, preact_1.h)("div", { class: "-cbwsdk-link-dialog" },
            (0, preact_1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-link-dialog-box", isDialogHidden && "-cbwsdk-link-dialog-box-hidden") },
                (0, preact_1.h)(ScanQRCode, { darkMode: props.darkMode, version: props.version, sessionId: props.sessionId, sessionSecret: props.sessionSecret, linkAPIUrl: props.linkAPIUrl, isConnected: props.isConnected, isParentConnection: props.isParentConnection }),
                props.onCancel && (0, preact_1.h)(CancelButton, { onClick: props.onCancel })))));
};
exports.LinkDialog = LinkDialog;
const ScanQRCode = props => {
    const qrUrl = (0, util_1.createQrUrl)(props.sessionId, props.sessionSecret, props.linkAPIUrl, props.isParentConnection);
    return ((0, preact_1.h)("div", { class: "-cbwsdk-link-dialog-box-content" },
        (0, preact_1.h)("h3", null,
            "Scan to",
            (0, preact_1.h)("br", null),
            " Connect"),
        (0, preact_1.h)("div", { class: "-cbwsdk-link-dialog-box-content-qrcode" },
            (0, preact_1.h)("div", { class: "-cbwsdk-link-dialog-box-content-qrcode-wrapper" },
                (0, preact_1.h)(QRCode_1.QRCode, { content: qrUrl, width: 224, height: 224, fgColor: "#000", bgColor: "transparent" })),
            (0, preact_1.h)("input", { type: "hidden", name: "cbwsdk-version", value: version_1.LIB_VERSION }),
            (0, preact_1.h)("input", { type: "hidden", value: qrUrl }),
            !props.isConnected && ((0, preact_1.h)("div", { class: "-cbwsdk-link-dialog-box-content-qrcode-connecting" },
                (0, preact_1.h)(Spinner_1.Spinner, { size: 128, color: props.darkMode ? "#fff" : "#000" }),
                (0, preact_1.h)("p", null, "Connecting..."))),
            (0, preact_1.h)("p", { title: `Coinbase Wallet SDK v${props.version}` }, "Powered by Coinbase Wallet SDK")),
        (0, preact_1.h)("a", { href: `${props.linkAPIUrl}/#/wallets`, target: "_blank", rel: "noopener" }, "Don\u2019t have a wallet app?")));
};
const CancelButton = props => ((0, preact_1.h)("button", { class: "-cbwsdk-link-dialog-box-cancel", onClick: props.onClick },
    (0, preact_1.h)("div", { class: "-cbwsdk-link-dialog-box-cancel-x" })));
