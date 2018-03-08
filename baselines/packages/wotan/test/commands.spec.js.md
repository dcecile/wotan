# Snapshot report for `packages/wotan/test/commands.spec.js`

The actual snapshot is saved in `commands.spec.js.snap`.

Generated by [AVA](https://ava.li).

## ShowCommand packages/wotan/test/fixtures/configuration/foo.js undefined

    `/packages/wotan/test/fixtures/configuration/.wotanrc.yaml␊
    File is excluded.`

## ShowCommand packages/wotan/test/fixtures/configuration/foo.ts json

    `/packages/wotan/test/fixtures/configuration/.wotanrc.yaml␊
    {␊
      "rules": {␊
        "custom/foo": {␊
          "severity": "warning",␊
          "rule": "foo",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures/configuration/custom-rules",␊
            "/packages/wotan/test/fixtures/configuration/my-rules",␊
            "/packages/wotan/test/fixtures/configuration/rules"␊
          ]␊
        },␊
        "custom/bar": {␊
          "severity": "warning",␊
          "rule": "bar",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures/configuration/rules"␊
          ]␊
        },␊
        "no-unstable-api-use": {␊
          "severity": "warning",␊
          "rule": "no-unstable-api-use"␊
        },␊
        "custom/my-cool-rule": {␊
          "severity": "error",␊
          "rule": "my-cool-rule",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures/configuration/my-rules"␊
          ]␊
        },␊
        "local/base": {␊
          "severity": "error",␊
          "rule": "base",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures"␊
          ]␊
        },␊
        "await-only-promise": {␊
          "severity": "error",␊
          "rule": "await-only-promise"␊
        },␊
        "local/baz": {␊
          "severity": "off",␊
          "rule": "baz",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures/configuration",␊
            "/packages/wotan/test/fixtures"␊
          ]␊
        },␊
        "a/my-alias": {␊
          "severity": "error",␊
          "rule": "aliased",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures/configuration/my-rules"␊
          ]␊
        },␊
        "a/alias": {␊
          "severity": "warning",␊
          "rule": "foo",␊
          "rulesDirectories": [␊
            "/packages/wotan/test/fixtures/configuration/rules"␊
          ]␊
        }␊
      },␊
      "settings": {␊
        "foo": true,␊
        "bar": "something",␊
        "local/setting": "moar"␊
      }␊
    }`

## ShowCommand packages/wotan/test/fixtures/configuration/foo.ts json5

    `/packages/wotan/test/fixtures/configuration/.wotanrc.yaml␊
    {␊
      rules: {␊
        "custom/foo": {␊
          severity: "warning",␊
          rule: "foo",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures/configuration/custom-rules",␊
            "/packages/wotan/test/fixtures/configuration/my-rules",␊
            "/packages/wotan/test/fixtures/configuration/rules"␊
          ]␊
        },␊
        "custom/bar": {␊
          severity: "warning",␊
          rule: "bar",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures/configuration/rules"␊
          ]␊
        },␊
        "no-unstable-api-use": {␊
          severity: "warning",␊
          rule: "no-unstable-api-use"␊
        },␊
        "custom/my-cool-rule": {␊
          severity: "error",␊
          rule: "my-cool-rule",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures/configuration/my-rules"␊
          ]␊
        },␊
        "local/base": {␊
          severity: "error",␊
          rule: "base",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures"␊
          ]␊
        },␊
        "await-only-promise": {␊
          severity: "error",␊
          rule: "await-only-promise"␊
        },␊
        "local/baz": {␊
          severity: "off",␊
          rule: "baz",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures/configuration",␊
            "/packages/wotan/test/fixtures"␊
          ]␊
        },␊
        "a/my-alias": {␊
          severity: "error",␊
          rule: "aliased",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures/configuration/my-rules"␊
          ]␊
        },␊
        "a/alias": {␊
          severity: "warning",␊
          rule: "foo",␊
          rulesDirectories: [␊
            "/packages/wotan/test/fixtures/configuration/rules"␊
          ]␊
        }␊
      },␊
      settings: {␊
        foo: true,␊
        bar: "something",␊
        "local/setting": "moar"␊
      }␊
    }`

## ShowCommand packages/wotan/test/fixtures/configuration/foo.ts undefined

    `/packages/wotan/test/fixtures/configuration/.wotanrc.yaml␊
    rules:␊
      a/alias:␊
        rule: foo␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/rules␊
        severity: warning␊
      a/my-alias:␊
        rule: aliased␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/my-rules␊
        severity: error␊
      await-only-promise:␊
        rule: await-only-promise␊
        severity: error␊
      custom/bar:␊
        rule: bar␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/rules␊
        severity: warning␊
      custom/foo:␊
        rule: foo␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/custom-rules␊
          - /packages/wotan/test/fixtures/configuration/my-rules␊
          - /packages/wotan/test/fixtures/configuration/rules␊
        severity: warning␊
      custom/my-cool-rule:␊
        rule: my-cool-rule␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/my-rules␊
        severity: error␊
      local/base:␊
        rule: base␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures␊
        severity: error␊
      local/baz:␊
        rule: baz␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration␊
          - /packages/wotan/test/fixtures␊
        severity: 'off'␊
      no-unstable-api-use:␊
        rule: no-unstable-api-use␊
        severity: warning␊
    settings:␊
      bar: something␊
      foo: true␊
      local/setting: moar␊
    `

## ShowCommand packages/wotan/test/fixtures/configuration/other-config.ts undefined

    `/packages/wotan/test/fixtures/configuration/base.yaml␊
    rules:␊
      custom/bar:␊
        rule: bar␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/rules␊
        severity: warning␊
      custom/foo:␊
        rule: foo␊
        rulesDirectories:␊
          - /packages/wotan/test/fixtures/configuration/rules␊
        severity: error␊
      no-unstable-api-use:␊
        rule: no-unstable-api-use␊
        severity: warning␊
    settings:␊
      bar: something␊
      foo: true␊
    `