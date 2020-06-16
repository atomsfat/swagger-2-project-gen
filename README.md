# Swagger 2 API - Project Generator

## How to use it

Go to the directory where you want to create your project and run:

```bash
pip install cookiecutter
cookiecutter https://github.com/atomsfat/swagger-2-project-gen
```

### Input variables

The generator (cookiecutter) will ask you for some data, you might want to have at hand before generating the project.

The input variables, with their default values (some auto generated) are:
*  `project_name`: The name of the project
*  `project_desc`: Project description
*  `project_author`: Project author
*  `project_license`: Apache 2.0

## More details

After using this generator, your new project (the directory created) will contain an extensive `README.md` with instructions for development, deployment, etc. You can pre-read [the project `README.md` template here too](./{{cookiecutter.project_slug}}/README.md).

 ## License

This project is licensed under the terms of the MIT license
