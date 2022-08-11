import { headerPlugin } from './headerMdPlugin'

export default {
    lang: 'en-US',
    title: 'Docs',
    description: 'Reddio Developer Documentations',
    scrollOffset: 'header',
    lastUpdated: true,

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/sdk/': sidebarGuide(),
            '/service': sidebarService(),
        },

        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ],

        footer: {
            license: {
                text: 'MIT License',
                link: 'https://opensource.org/licenses/MIT'
            },
            copyright: `Copyright © 2022-${new Date().getFullYear()} Reddio`
        },

        algolia: {
            appId: '7A2B60ZRYU',
            apiKey: 'b2ad15f65554f29ad97ab2c7ccadeb25',
            indexName: 'blog'
        },

        markdown: {
            config(md) {
                md.use(headerPlugin)
            }
        },
    }
}

function nav() {
    return [
        { text: 'SDK', link: '/sdk/overview', activeMatch: '/sdk/' },
        { text: 'APIs', link: '/api/layer2-apis', activeMatch: '/api/' },
        { text: 'Docs', link: '/service/overview', activeMatch: '/overview/' },
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Overview', link: '/sdk/overview' },
            ]
        },
        {
            text: 'SDK Reference',
            collapsible: true,
            items: [
                { text: 'Init SDK', link: '/sdk/init' },
                { text: 'KeyPair', link: '/sdk/keypair' },
                { text: 'Request', link: '/sdk/request' },
                { text: 'Utils', link: '/sdk/utils' },
                { text: 'Contract', link: '/sdk/contract' },
            ]
        }
    ]
}

function sidebarService() {
    return [
        {
            text: 'Introduction',
            collapsible: false,
            items: [
                { text: 'Overview', link: '/service/overview' },
                { text: 'Components', link: '/service/components' },
                { text: 'Layer 2 Introduction', link: '/service/layer2introduction' },
            ]
        },
        {
            text: 'Get Started',
            collapsible: false,
            items: [
                { text: 'User Onboarding', link: '/service/user-onboarding' },
                { text: 'NFT Backend Integration', link: '/service/nft-backend' },
                { text: 'NFT Javascript Integration', link: '/service/nft-jssdk' },
                { text: 'ERC20 Javascript Integration', link: '/service/erc20-jssdk' },
                { text: 'ETH Javascript Integration', link: '/service/eth-jssdk' },
            ]
        },
        {
            text: 'Reference',
            collapsible: false,
            items: [
                { text: 'Terminology', link: '/service/terminology' },
            ]
        }
    ]
}
