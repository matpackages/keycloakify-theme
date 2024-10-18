import { useEffect, useLayoutEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import { Icon } from '@iconify/react';
import { initTooltips } from "../util";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr, currentLanguage, enabledLanguages } = i18n;

    const { auth, url, message, isAppInitiatedAction } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", kcContext.realm.displayName);
    }, []);

    useLayoutEffect(() => {
        return initTooltips()
    });

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className={kcClsx("kcLoginClass")}>
            <div>
                <header className={kcClsx("kcFormHeaderClass")}>
                    {enabledLanguages.length > 1 && (
                        <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
                            <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
                                <div id="kc-locale-dropdown" className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}>
                                    <button
                                        tabIndex={1}
                                        id="kc-current-locale-link"
                                        aria-label={msgStr("languages")}
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-controls="language-switch1"
                                        className={"locale-dropdown-button"}
                                    >
                                        {currentLanguage.label}
                                    </button>
                                    <ul
                                        role="menu"
                                        tabIndex={-1}
                                        aria-labelledby="kc-current-locale-link"
                                        aria-activedescendant=""
                                        id="language-switch1"
                                        className={kcClsx("kcLocaleListClass")}
                                    >
                                        {enabledLanguages.map(({ languageTag, label, href }, i) => (
                                            <li key={languageTag} className={kcClsx("kcLocaleListItemClass")} role="none">
                                                <a role="menuitem" id={`language-${i + 1}`} className={kcClsx("kcLocaleItemClass")} href={href}>
                                                    {label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="text-center">
                        <img src="/favicon.svg" alt="Logo" width="48" height="48" />
                    </div>
                    {(() => {
                        const node = (
                            <h1 className="text-center mt-2 lead mb-0" id="kc-page-title">{headerNode}</h1>
                        );

                        if (displayRequiredFields) {
                            return (
                                <div className={kcClsx("kcContentWrapperClass")}>
                                    <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                        <span className="subtitle">
                                            <span className="required">*</span>
                                            {msg("requiredFields")}
                                        </span>
                                    </div>
                                    <div className="col-md-10">{node}</div>
                                </div>
                            );
                        }

                        return node;
                    })()}
                    {displayInfo && (
                        <div id="kc-info" className={kcClsx("kcSignUpClass")}>
                            <div id="kc-info-wrapper" className={kcClsx("kcInfoAreaWrapperClass")}>
                                {infoNode}
                            </div>
                        </div>
                    )}
                </header>
                {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                    <div
                        className={clsx(
                            kcClsx("kcAlertClass"),
                            `alert-${
                                message?.type === "error" ? "danger" : 
                                message?.type === "info" ? "primary" : message.type
                            }`,
                        )}
                    >
                        <div className="pf-c-alert__icon">
                            {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                            {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                            {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                            {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                        </div>
                        <span
                            className={kcClsx("kcAlertTitleClass")}
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(message.summary)
                            }}
                        />
                    </div>
                )}
                <div id="kc-content">
                    <div id="kc-content-wrapper" className={kcClsx("kcFormCardClass")}>
                        {!(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                            undefined
                        ) : (
                            <div id="kc-username" className={kcClsx("kcFormGroupClass", "kcInputGroup")}>
                                <input id="kc-attempted-username" className="form-control" type="text" value={auth.attemptedUsername} disabled />
                                <a id="reset-login"
                                    className="btn btn-light btn-restart text-muted"
                                    href={url.loginRestartFlowUrl}
                                    aria-label={msgStr("restartLoginTooltip")}
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title={msgStr("restartLoginTooltip")}
                                >
                                    <div className="kc-login-tooltip">
                                        <i className={kcClsx("kcResetFlowIcon")}></i>
                                        <span className="kc-tooltip-text display-none">{msg("restartLoginTooltip")}</span>
                                    </div>
                                </a>
                            </div>
                        )
                        }
                        {children}
                        {auth !== undefined && auth.showTryAnotherWayLink && (
                            <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                <div className="d-grid d-block mt-2">
                                    <input type="hidden" name="tryAnotherWay" value="on" />
                                    <a
                                        href="#"
                                        id="try-another-way"
                                        className="btn btn-light"
                                        onClick={() => {
                                            document.forms["kc-select-try-another-way-form" as never].submit();
                                            return false;
                                        }}
                                    >
                                        <Icon icon="octicon:passkey-fill-16" className="text-muted me-2 vfix"/>
                                        {msg("doTryAnotherWay")}
                                    </a>
                                </div>
                            </form>
                        )}
                        {socialProvidersNode}
                    </div>
                </div>
            </div>
        </div>
    );
}
