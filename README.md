[![codecov](https://codecov.io/gh/danielaQVMuniz/basic-json-validator/branch/master/graph/badge.svg?token=5MHX18WMY2)](https://codecov.io/gh/danielaQVMuniz/basic-json-validator)
# Basic JSON validator

**Description**: basic-json-validator is a light weight JavaScript library for simple JSON validation.

## Installation
```
npm i basic-json-validator
```

## Usage

Possible schema validation configurations:
1. [Schema Definition](#schema-definition)
1. [Simple Type validation](#simple-type-validation)
2. [Custom Regex validation](#custom-regex-validation)
3. [Custom Callback validation](#custom-callback-validation)
4. [Formik Validation Example](#formik-validation-example)

> The same schema could have multiple validation types for the different keys.

This package offers few default test types to help with simple key validations. Those are: `string`, `number`, `boolean`, `url`, `email`

#### Schema Definition
Define rules for each field to be validated. 
Type: `ISchema`
Could use default library types, regex or a custom validation.

```
const emailSchema = {
  errorMessage: 'Verify if email is valid',
  isRequired: true,
  type: 'email',
}

const emailRegexSchema = {
  errorMessage: 'Email does not match',
  regex: emailRegex,
}

const emailCustomSchema = {
  customCallback: isEmail,
  errorMessage: 'Email does not match',
}
```

##### Simple type validation

```
const JSONObj = {
  "name": "John Doe",
  "email": "mail@email.com"
}

validateSchema({
  jsonValue: JSON.stringify(JSONObj),
  schema: {
    email: emailSchema
  }
})
```

##### Custom regex validation
```
validateSchema({
  jsonValue: JSON.stringify(JSONObj),
  schema: {
    email: emailRegexSchema,
  }
})
```


##### Custom callback validation

```
validateSchema({
  jsonValue: JSON.stringify(JSONObj),
  schema: {
    email: emailCustomSchema
  },
})
```

##### Formik Validation Example

This library works very well with Formik.
Define a schema for each value 

```


const validateForm = (values) => {
  return validateSchema({
    jsonValue: JSON.stringify(values),
    schema: {
      email: emailSchema
    },
  })
}

<Formik
  initialValues={{ email: '' }}
  onSubmit={handleSubmit}
  validate={validateForm}
>
```

## Getting involved

Please, create issues if you have any problems using this library and feel free to open a pull request with suggestions.

Any contributions should be 100% covered by automated tests.
