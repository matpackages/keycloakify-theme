import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            loginAccountTitle: "Sign in to <strong>matpackages</strong>",
            registerTitle: "Register at <strong>matpackages</strong>",
            doLogIn: "Sign in",
            doForgotPassword: "Forgot password?",
            doTryAnotherWay: "Use other method",
            loginTotpTitle: "Add new authenticator app",
            loginTotpDeviceName: "Device name",
            emailForgotTitle: "Forgot your password?",
            backToLogin: "Back to sign-in",
            passwordNew: "New password",
            loginProfileTitle: "Update user profile",
            termsTitle: "Terms and conditions",
            loginChooseAuthenticator: "Select sign-in method",
            "otp-display-name": "Authenticator application",
            "webauthn-available-authenticators": "Available passkeys",
            "webauthn-doAuthenticate": "Sign in with passkey",
            "loginIdpReviewProfileTitle": "Update user profile",
            "webauthn-error-title": "Passkey error",
            "webauthn-registration-title": "Add new passkey",
            "backToApplication": "Back to application",
            "proceedWithAction": "Proceed here",
        },
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
