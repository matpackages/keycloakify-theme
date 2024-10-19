import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-otp.ftl" });

const meta = {
    title: "login/login-otp.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithOneCredential: Story = {
    render: () => <KcPageStory 
        kcContext={{
            otpLogin: {
                userOtpCredentials: [{
                    id: "otp1",
                    userLabel: "user-label1",
                }]
            }
        }}
    />
};

export const WithOneCredentialAndPresetName: Story = {
    render: () => <KcPageStory 
        kcContext={{
            auth: {
                attemptedUsername: "max.mustermann@mail.com",
                showUsername: true,
                showTryAnotherWayLink: true,
            },
            otpLogin: {
                userOtpCredentials: [{
                    id: "otp1",
                    userLabel: "user-label1",
                }]
            }
        }}
    />
};

export const WithTwoCredentialsAndPresetName: Story = {
    render: () => <KcPageStory 
        kcContext={{
            auth: {
                attemptedUsername: "max.mustermann@mail.com",
                showUsername: true,
                showTryAnotherWayLink: true,
            },
            otpLogin: {
                userOtpCredentials: [{
                    id: "otp1",
                    userLabel: "user-label1",
                },
                {
                    id: "otp2",
                    userLabel: "user-label2",
                }]
            }
        }}
    />
};
