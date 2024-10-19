import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "webauthn-authenticate.ftl" });

const meta = {
    title: "login/webauthn-authenticate.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const WithAnotherWay: Story = {
    render: () => <KcPageStory
        kcContext={{
            auth: { showTryAnotherWayLink: true },
        }}
    />
};

export const WithPrefilledUser: Story = {
    render: () => <KcPageStory
        kcContext={{
            auth: {
                attemptedUsername: "max.mustermann@mail.com",
                showUsername: true,
                showTryAnotherWayLink: true,
            },
        }}
    />
};

export const WithPrefilledUserAndOneKey: Story = {
    render: () => <KcPageStory
        kcContext={{
            auth: {
                attemptedUsername: "max.mustermann@mail.com",
                showUsername: true,
                showTryAnotherWayLink: true,
            },
            shouldDisplayAuthenticators: true,
            authenticators: {
                authenticators: [
                    {
                        credentialId: "asdf",
                        transports: {
                            iconClass: "fa-solid fa-key",
                            displayNameProperties: ["a", "b"],
                        },
                        label: "my-passkey",
                        createdAt: "Oct 7, 2024, 6:02 PM",
                    }
                ]
            },
        }}
    />
};

export const WithPrefilledUserAndTwoKeys: Story = {
    render: () => <KcPageStory
        kcContext={{
            auth: {
                attemptedUsername: "max.mustermann@mail.com",
                showUsername: true,
                showTryAnotherWayLink: true,
            },
            shouldDisplayAuthenticators: true,
            authenticators: {
                authenticators: [
                    {
                        credentialId: "asdf",
                        transports: {
                            iconClass: "fa-solid fa-key",
                            displayNameProperties: ["a", "b"],
                        },
                        label: "my-passkey",
                        createdAt: "Oct 7, 2024, 6:02 PM",
                    },
                    {
                        credentialId: "asdf2",
                        transports: {
                            iconClass: "fa-solid fa-key",
                            displayNameProperties: ["a2", "b2"],
                        },
                        label: "my-passkey2",
                        createdAt: "Oct 8, 2024, 6:02 PM",
                    }
                ]
            },
        }}
    />
};
