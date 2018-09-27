module.exports = {
    base: '/serie-docker/',
    title: 'Na minha máquina funciona',
    description: 'Série sobre a tecnologia docker, demonstrando conceitos básicos ao avançado.',
    dest: './docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' }
        ],
        sidebar: {
            '/content/': [
                '/',
                'intro'
            ]
        }
    }
}