[![codecov](https://codecov.io/gh/danielaQVMuniz/basic-json-validator/branch/master/graph/badge.svg?token=5MHX18WMY2)](https://codecov.io/gh/danielaQVMuniz/basic-json-validator)
# Basic JSON validator

**Description**: basic-json-validator is a light weight JavaScript library for simple JSON validation.

## Installation
```
npm i basic-json-validator
```

## Usage

Possible schema validation configurations:
1. [Simple Type validation](#simple-type-validation)
2. [Custom Regex validation](#custom-regex-validation)
3. [Custom Callback validation](#custom-callback-validation)

> The same schema could have multiple validation types for the different keys.

This package offers few default test types to help with simple key validations. Those are: `string`, `number`, `boolean`, `url`, `email`

##### Simple type validation

```
const schema: ISchema = {
  name: {
    type: 'string',
    errorMessage: 'Name is required',
    isRequired: true
  }
  email: {
    type: 'email',
    errorMessage: 'Email is not valid',
    isRequired: true
  }
}

const JSONObj = {
  "name": "John Doe",
  "email": "mail@email.com"
}

validateSchema({
  jsonValue: JSON.stringify(JSONObj),
  schema: schema,
})
```

##### Custom regex validation
```
const schema: ISchema = {
  email: {
    errorMessage: 'Email does not match',
    regex: emailRegex,
  },
  url: {
    errorMessage: 'Url does not match',
    regex: urlRegex,
  }
}

validateSchema({
  jsonValue: JSON.stringify(JSONObj),
  schema: schema,
})
```


##### Custom callback validation

```
const schema: ISchema = {
  email: {
    customCallback: (email: string) => {
      return isEmail(email)
    },
    errorMessage: 'Email does not match',
  },
  url: {
    customCallback: (url: string) => {
      return isUrl(url) 
    },
    errorMessage: 'Url does not match',
  }
}

validateSchema({
  jsonValue: JSON.stringify(JSONObj),
  schema: schema,
})
```

## Getting involved

Please, create issues if you have any problems using this library and feel free to open a pull request with suggestions.

Any contributions should be 100% covered by automated tests.