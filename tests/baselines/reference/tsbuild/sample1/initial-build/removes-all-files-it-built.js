Input::
//// [/lib/lib.d.ts]


//// [/src/core/anotherModule.d.ts]


//// [/src/core/anotherModule.d.ts.map]


//// [/src/core/anotherModule.js]


//// [/src/core/anotherModule.ts]


//// [/src/core/index.d.ts]


//// [/src/core/index.d.ts.map]


//// [/src/core/index.js]


//// [/src/core/index.ts]


//// [/src/core/some_decl.d.ts]


//// [/src/core/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "declarationMap": true,
        "skipDefaultLibCheck": true
    }
}

//// [/src/core/tsconfig.tsbuildinfo]


//// [/src/logic/index.d.ts]


//// [/src/logic/index.js]


//// [/src/logic/index.js.map]


//// [/src/logic/index.ts]


//// [/src/logic/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../core" }
    ]
}


//// [/src/logic/tsconfig.tsbuildinfo]


//// [/src/tests/index.d.ts]


//// [/src/tests/index.js]


//// [/src/tests/index.ts]


//// [/src/tests/tsconfig.json]
{
    "references": [
        { "path": "../core" },
        { "path": "../logic" }
    ],
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    }
}

//// [/src/tests/tsconfig.tsbuildinfo]


//// [/src/ui/index.ts]


//// [/src/ui/tsconfig.json]




Output::
/lib/tsc --b /src/tests --clean
exitCode:: ExitStatus.Success

getModifiedTime:: {}

setModifiedTime:: {}

fileExists:: {
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1,
 "/src/tests/tsconfig.tsbuildinfo": 1
}

directoryExists:: {}


//// [/src/core/anotherModule.d.ts] unlink
//// [/src/core/anotherModule.d.ts.map] unlink
//// [/src/core/anotherModule.js] unlink
//// [/src/core/index.d.ts] unlink
//// [/src/core/index.d.ts.map] unlink
//// [/src/core/index.js] unlink
//// [/src/core/tsconfig.tsbuildinfo] unlink
//// [/src/logic/index.d.ts] unlink
//// [/src/logic/index.js] unlink
//// [/src/logic/index.js.map] unlink
//// [/src/logic/tsconfig.tsbuildinfo] unlink
//// [/src/tests/index.d.ts] unlink
//// [/src/tests/index.js] unlink
//// [/src/tests/tsconfig.tsbuildinfo] unlink


Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tests --clean
exitCode:: ExitStatus.Success

getModifiedTime:: {}

setModifiedTime:: {}

fileExists:: {
 "/src/core/anotherModule.js": 1,
 "/src/core/anotherModule.d.ts": 1,
 "/src/core/anotherModule.d.ts.map": 1,
 "/src/core/index.js": 1,
 "/src/core/index.d.ts": 1,
 "/src/core/index.d.ts.map": 1,
 "/src/core/tsconfig.tsbuildinfo": 1,
 "/src/logic/index.js": 1,
 "/src/logic/index.js.map": 1,
 "/src/logic/index.d.ts": 1,
 "/src/logic/tsconfig.tsbuildinfo": 1,
 "/src/tests/index.js": 1,
 "/src/tests/index.d.ts": 1,
 "/src/tests/tsconfig.tsbuildinfo": 1
}

directoryExists:: {}


