# keycloakify-theme

Generated from template [keycloakify/keycloakify-starter @ 28cdb22](https://github.com/keycloakify/keycloakify-starter/tree/28cdb22e734549d36eac545752ab1767f6cedfbd).

This starter is based on Vite. There is also [a Webpack based starter](https://github.com/keycloakify/keycloakify-starter-webpack).

# Quick start

```bash
git clone https://github.com/matpackages/keycloakify-theme
cd keycloakify-theme
npm install
```

# Testing the theme locally

[Documentation](https://docs.keycloakify.dev/v/v10/testing-your-theme)

TLDR:
```
npx keycloakify add-story
npm run storybook
```

Check [Storybook](https://storybook.keycloakify.dev/?path=/story/login-login-ftl--default) for a preview of all available stories.

# How to customize the theme

[Documentation](https://docs.keycloakify.dev/v/v10/customization-strategies)

### Customize CSS styles and classes only

* Define classes, such as `kcHtmlClass: "my-html"` in `KcPage.tsx`
* Use CSS file to define style of class `.my-html`

### Customize DOM and CSS

Customize a component freely (including its DOM structure):

```
npx keycloakify eject-page
```

Will add the page to your codebase.

# Building the theme

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.  

-   On macOS: `brew install maven`
-   On Debian/Ubuntu: `sudo apt-get install maven`
-   On Windows: `choco install openjdk` and `choco install maven` (Or download from [here](https://maven.apache.org/download.cgi))

```bash
npm run build-keycloak-theme
```

Note that by default Keycloakify generates multiple .jar files for different versions of Keycloak.  
You can customize this behavior, see documentation [here](https://docs.keycloakify.dev/targeting-specific-keycloak-versions).

# Initializing the account theme

```bash
npx keycloakify initialize-account-theme
```

# Initializing the email theme

```bash
npx keycloakify initialize-email-theme
```

# GitHub Actions

The starter comes with a generic GitHub Actions workflow that builds the theme and publishes
the jars [as GitHub releases artifacts](https://github.com/keycloakify/keycloakify-starter/releases/tag/v10.0.0).  
To release a new version **just update the `package.json` version and push**.

To enable the workflow go to your fork of this repository on GitHub then navigate to:
`Settings` > `Actions` > `Workflow permissions`, select `Read and write permissions`.
