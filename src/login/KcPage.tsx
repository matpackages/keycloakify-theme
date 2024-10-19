import "./main.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
const UserProfileFormFields = lazy(
    () => import("./UserProfileFormFields")
);

const Login = lazy(() => import("./pages/Login"));
const LoginResetPassword = lazy(() => import("./pages/LoginResetPassword"));
const Register = lazy(() => import("./pages/Register"));
const WebauthnAuthenticate = lazy(() => import("./pages/WebauthnAuthenticate"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl": return (
                        <Login
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    case "login-reset-password.ftl": return (
                        <LoginResetPassword
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    case "register.ftl": return (
                        <Register
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                            UserProfileFormFields={UserProfileFormFields}
                            doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                        />
                    );
                    case "webauthn-authenticate.ftl": return (
                        <WebauthnAuthenticate
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={false}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {
    kcHtmlClass: "",
    kcBodyClass: "",
    kcLoginClass: "form-signin w-100 m-auto mt-2 mt-sm-5",
    kcFormHeaderClass: "mb-3",
    kcButtonPrimaryClass: "btn-primary",
    kcButtonBlockClass: "",
    kcButtonClass: "btn",
    kcButtonLargeClass: "",
    kcFormGroupClass: "mb-2",
    kcLabelClass: "form-label",
    kcInputClass: "form-control",
    kcInputErrorMessageClass: "invalid-feedback",
    kcInputGroup: "input-group",
    kcFormPasswordVisibilityButtonClass: "btn btn-outline-secondary",
    kcFormPasswordVisibilityIconShow: "fa-solid fa-eye password-visibility-icon",
    kcFormPasswordVisibilityIconHide: "fa-solid fa-eye-slash password-visibility-icon",
    kcLocaleMainClass: "d-flex justify-content-center mb-3",
    kcLocaleDropDownClass: "dropdown",
    kcLocaleListClass: "dropdown-menu dropdown-menu-end menu-max-height",
    kcLocaleItemClass: "dropdown-item",
    kcFormCardClass: "card-responsive p-sm-3",
    kcSignUpClass: "text-center small text-muted",
    kcCommonLogoIdP: "social-icon fa-brands",
    kcFormSocialAccountListButtonClass: "text-muted social-button",
    kcFormSocialAccountListClass: "row gy-4 text-center no-list",
    kcFormSocialAccountListGridClass: "row gy-4 text-center no-list",
    kcFormSocialAccountNameClass: "display-none",
    kcAlertClass: "alert d-flex align-items-baseline",
    kcFeedbackErrorIcon: "fa-solid fa-triangle-exclamation me-2",
    kcFeedbackSuccessIcon: "fa-solid fa-check me-2",
    kcFeedbackWarningIcon:"fa-solid fa-triangle-exclamation me-2",
    kcFeedbackInfoIcon: "fa-solid fa-circle-info me-2",
    kcResetFlowIcon: "fa-solid fa-rotate-left restart-login-icon",
    kcFormButtonsClass: "d-grid d-block mt-3",
    kcSelectAuthListClass: "list-group",
    kcSelectAuthListItemClass: "list-group-item list-group-item-action flex-list-item d-flex flex-row py-3",
    kcSelectAuthListItemHeadingClass: "h5 mb-1",
    kcSelectAuthListItemDescriptionClass: "mb-1 me-2 text-muted select-login-text",
    kcSelectAuthListItemIconPropertyClass: "mx-2 text-muted",
    kcAuthenticatorDefaultClass: "fa-solid fa-lock",
    kcAuthenticatorPasswordClass: "fa-solid fa-lock",
    kcAuthenticatorOTPClass: "fa-solid fa-mobile-screen",
    kcAuthenticatorWebAuthnClass: "octicon octicon-passkey-fill-24 vfix",
    kcAuthenticatorWebAuthnPasswordlessClass: "octicon octicon-passkey-fill-24 vfix",
} satisfies { [key in ClassKey]?: string };
