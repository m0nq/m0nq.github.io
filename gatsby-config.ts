/**
 * @type {import('gatsby').GatsbyConfig}
 */
import type { PluginRef } from 'gatsby';
import type { GatsbyConfig } from 'gatsby';
import 'dotenv/config';
import * as path from 'node:path';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
    pathPrefix: '/portfolio',
    siteMetadata: {
        title: 'Monk Wellington',
        siteTitle: 'Monk Wellington',
        siteTitleAlt: 'Monk Wellington',
        siteUrl: 'https://m0nq.github.io/portfolio',
        siteDescription: `Portfolio with colorful accents. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        siteImage: '/banner.jpg',
        siteLanguage: 'en',
        author: '@m0nq',
        menuLinks: [
            {
                name: 'home',
                link: '/'
            },
            {
                name: 'about',
                link: '/about'
            },
            {
                name: 'projects',
                link: '/projects'
            },
            {
                name: 'contact',
                link: '/contact'
            },
            {
                name: 'blog',
                link: '/blog'
            }
        ]
    },
    trailingSlash: 'never',
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                'icon': 'src/images/icon.png'
            }
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-remark',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'images',
                'path': './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'pages',
                'path': './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components')
                },
                extensions: []
            }
        }
    ].filter(Boolean) as Array<PluginRef>
};

export default config;
