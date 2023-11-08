# Naming Conventions

## Context and Problem Statement

Inconsistent branch, file, and variable names can affect the readability of code. In order to keep our code organized and allow every member to understand others' code easily, we will follow a standard naming convention for branches, files/components, and variables.

## Considered Options

* Following naming conventions used commonly in React
* Following workplace naming conventions

## Decision Outcome

- Naming convention for branches
  - ‘fvt’ followed by issue # followed by issue name
  - Ex. FVT-5-HomeHeader

- Naming covention for files/components
  - PascalCase: capitalize the first letter of every word; no spaces/symbols
  - https://www.theserverside.com/definition/Pascal-case#:~:text=Pascal%20case%20%2D%2D%20or%20PascalCase,names%20to%20include%20blank%20spaces.
  - Ex. NavBar

- Naming convention for variables
  - CamelCase: capitalize the first letter of every word except the first word; no spaces/symbols
  - https://www.techtarget.com/whatis/definition/CamelCase#:~:text=CamelCase%20is%20a%20way%20to,humps%20on%20a%20camel's%20back.
  - Ex. myName
 
- Function format
```const Footer = () => {
    return (
        <div className="text-lg">
            <div className="text-slate-900 text-xl ">鴻日興科技有限公司</div>
            <div className="text"></div>
        </div>
    )
}
export default Footer```
