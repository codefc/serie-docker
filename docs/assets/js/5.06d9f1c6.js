(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("Neste primeiro módulo da série vamos conhecer alguns conceitos importantes para se trabalhar com o Docker.")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("É muito importante entender-mos que um container não é uma máquina virtual. Como sabemos, a máquina virtual é composta por um sistema operacional e toda sua complexidade de gerenciamento, sendo matida por um host e gerenciando seu próprio recurso alocado na criação da mesma.")]),e._v(" "),t("p",[e._v("Um container, por outro lado é algo mais simples, ele tem, apenas o que é necessário para sua execução e compartilha recursos com a máquina host. Também existe um isolamento, porém mais fácil e gerenciável.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/codefc/serie-docker/blob/master/docs/images/container.png?raw=true",alt:"Container"}}),e._v(" "),t("strong",[e._v("Fonte:")]),e._v(" - "),t("a",{attrs:{href:"https://docs.docker.com/get-started/#images-and-containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação do docker"),t("OutboundLink")],1)]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("É a execução de uma imagem. Pode-se executar N containers da mesma imagem mantendo o isolamento entre eles.")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("O registry é basicamente um repositório de imagens docker. Existem registries públicos e privados. Através deste repositório ou catálogo de imagens temos acesso ao várias aplicações em forma de container e podemos utilizar as imagens existentes como base para a criação de nossas imagens customizadas.\n"),t("img",{attrs:{src:"https://github.com/codefc/serie-docker/blob/master/docs/images/vm.png?raw=true",alt:"Máquina virtual"}}),e._v(" "),t("strong",[e._v("Fonte:")]),e._v(" - "),t("a",{attrs:{href:"https://docs.docker.com/get-started/#images-and-containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentação do docker"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Na instalação do docker engine na máquina, temos, por padrão o acesso ao registry "),t("a",{attrs:{href:"http://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("DockerHub"),t("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("Alguns comandos básicos para interagir com o docker.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12)])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"introducao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducao","aria-hidden":"true"}},[this._v("#")]),this._v(" Introdução")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"container-x-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-x-virtual-machine","aria-hidden":"true"}},[this._v("#")]),this._v(" Container x Virtual Machine")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[this._v("#")]),this._v(" Image")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Quando falamos de docker, sempre vamos ouvir falar sobre imagens - "),a("strong",[this._v("image")]),this._v('. Uma imagem é uma "foto" ou modelo de alguma aplicação que será transformada em um container, na sua execução.')])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container","aria-hidden":"true"}},[this._v("#")]),this._v(" Container")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Registry")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"comandos-basicos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comandos-basicos","aria-hidden":"true"}},[this._v("#")]),this._v(" Comandos básicos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v("Listar todas os containers em execução:")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("docker "),a("span",{attrs:{class:"token function"}},[this._v("ps")]),this._v("\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v("Listar todos os containers em execução e os que não encontram-se em execução:")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("docker "),a("span",{attrs:{class:"token function"}},[this._v("ps")]),this._v(" -a\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v("Listar todas as imagens disponíveis na máquina host:")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("docker images\n")])])])}],!1,null,null,null);r.options.__file="intro.md";a.default=r.exports}}]);