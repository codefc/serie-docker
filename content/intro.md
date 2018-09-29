# Introdução

Neste primeiro módulo da série vamos conhecer alguns conceitos importantes para se trabalhar com o Docker.

## Container x Virtual Machine

É muito importante entender-mos que um container não é uma máquina virtual. Como sabemos, a máquina virtual é composta por um sistema operacional e toda sua complexidade de gerenciamento, sendo matida por um host e gerenciando seu próprio recurso alocado na criação da mesma.

Um container, por outro lado é algo mais simples, ele tem, apenas o que é necessário para sua execução e compartilha recursos com a máquina host. Também existe um isolamento, porém mais fácil e gerenciável.

![Container](https://github.com/codefc/serie-docker/tree/master/docs/images/container.png?raw=true)
![Máquina virtual](https://github.com/codefc/serie-docker/tree/master/docs/images/vm.png?raw=true)
**Fonte:** - [documentação do docker](https://docs.docker.com/get-started/#images-and-containers)

## Image

Quando falamos de docker, sempre vamos ouvir falar sobre imagens - **image**. Uma imagem é uma "foto" ou modelo de alguma aplicação que será transformada em um container, na sua execução.

## Container

É a execução de uma imagem. Pode-se executar N containers da mesma imagem mantendo o isolamento entre eles.

## Registry

O registry é basicamente um repositório de imagens docker. Existem registries públicos e privados. Através deste repositório ou catálogo de imagens temos acesso ao várias aplicações em forma de container e podemos utilizar as imagens existentes como base para a criação de nossas imagens customizadas.

Na instalação do docker engine na máquina, temos, por padrão o acesso ao registry [DockerHub](http://hub.docker.com).

## Comandos básicos

Alguns comandos básicos para interagir com o docker.

**Listar todas os containers em execução:**
```bash
docker ps
```


**Listar todos os containers em execução e os que não encontram-se em execução:**
```bash
docker ps -a
```

**Listar todas as imagens disponíveis na máquina host:**
```bash
docker images
```
