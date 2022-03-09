const style = ` #buttonContainer button {
        background-color: #008fff;
        cursor: pointer;
    }
    
    #buttonContainer button:hover {
        background-color: #0076d1;
    }
}`;

const styleSheet = document.createElement("style");
styleSheet.innerText = style;
document.head.appendChild(styleSheet);

function copyPGPKey() {

    navigator.clipboard.writeText(`-----BEGIN PGP PUBLIC KEY BLOCK-----
    Comment: 0427 9866 F112 0AD2 256E  85A0 D8AC 3464 D7D3 87AB
    
    xsDNBGEPRXsBDADmjambAPOcif7Tk0xYCArX/er5tvjCHPGPUCb0j+keXnRi/OTq
    h4lVZCpinct4Gv+8Q+Oyb53WM3ONDHehDMxDQ5O/voLBOmK8pAv9RxfBzxuMMUcx
    3DmF0YAgBEKtLLp2agoKFO8kvT4pgVGJTln+D9tNSBPKRYYOW4b8XR+BX9H1o7kH
    EeNL7L9hnlSawl2kZ3Z+QtsxFBkjYxEM/7pS1j0LdRkWGFV5zSpWSlwYZMg0Qv1q
    ADa5GSarAxJYxRJNZtwFBrqwhPY2f2xKf12zWsTlC63L8LkGG6bkknvUUbNTQHzV
    ctsrsiBuCYr+TfDp1t/BPxVoYnWVdrpJeqPJlDH5v3aJ/KVXTifkLkqBeGqFewv5
    CTVZ+orMNzwiYsd74upDpQwbZLtNFRql16jz90KlXZ5T92w7rONQ7zpAnzVaL+P/
    2LZ+G0aJBrsKccy1ZCQfNEp5U6OkJoWuz6oAFkblzTTI+mGXxhc0FmDvbHGqngJi
    XyHW1eHZkEqSpdEAEQEAAc0pU2ViYXN0acOhbiBDYW1hcmdvIDxjYW1hcmdvQHR1
    dGFtYWlsLmNvbT7CwREEEwEIACQFAmEPRXsCGwMEFQgJCgcLCQgHAwIBBBYDAgEC
    HgECF4ACGQEAIQkQ2Kw0ZNfTh6sWIQQEJ5hm8RIK0iVuhaDYrDRk19OHq+Z3C/4m
    HB3yjXEMTILfhC1Rq+r32UGvZSlw1xBzKwXNC1UyUoL7ssprGAhoaSORU3IqFrro
    aemGbY45FW76ZH27HkfRMdV0JwdTz0zfQKBUtSyjrTymFwC7jDsDMGXly56OL1vI
    wM/cb23/oJFFy1WegFa+/WhB0wsZ6XE8q3o85i6WimoXxtQNgoegHjBw45tdJgcw
    YkDv/Nt6fxi2sFUq+5Fcl/MEn3nniArDXBjJStzjf1AX/Smuw3BbtwdacAfxc/2j
    J56haK6jsZiducnGeikUGxDaNJ3ocMDesyUQW7zCow6NbAuVF9z5J0CfiSy0T0c9
    bmFk4oAhY971NWqfnhf2ijjKonughvn2gTCEYPqRhT/BiSVZgJDPS2j4UywXhPVI
    1Iskirk99vH4sqsGov5dcctLA3FJJADZRi3pb7MT6NaI3KowzEvrMfRwPFrQdxXR
    66tqU+bzdmfXiMHvEXyjPp6RaSCq+lnnVgoiMw2MlWA/hfOPFs5jgrHJ6fONsDXO
    wM0EYQ9FewEMALQ+pCrUCntyK9w21G+VaRrLqOb//isXBeJo94eLAydDcpRkDYlu
    J1F/KZFe8860mUaFtKoobY2uOse7RjrvCrbiC47VZKhDZp8tuRjlzm8hbnv2PRIL
    5CYfcb3sWODvdIN9bzfaQul9dWDZ/vZGcv+An7s3XSi6lO0afKnKwxPcMfU8lKsh
    u7g3KBQCKXro/cfwqaYwoTwcF8rkmNsrPe+/k8ZubIvSpGP0GjJ2hbm6Sindq33p
    Wsflhu5P4cVMWXZwf3EY68AQ9h8y9tVcB1keTUoDRD+kHExneaVk/W5stuK4juHb
    fcklunMV0Mmq4fNjymOuOCLhAV6mfWFrqQTTlI0NuaEf2l6R1n9ba13PILk4zRXG
    PEk3OnxdTOJOHGPmqQXOX8lmryAdReTfP6sRbqQddFghILkiKvCCs08NvoKgB3PP
    M1dPyH08fDXpCp8DSC3iikMBoPu1aNFxltW5vU1dd1wv1MhmElFytEXZNOWeHZHZ
    LW+nd9t892oCWQARAQABwsKVBBgBCAGoBQJhD0V8AhsMwN0gBBkBCAAGBQJhD0V8
    AAoJEEc5J/skCtJyrlUL/312tFnBZFwBFjAqmfruALop7OnRxXvbqPyWq6eXvkZn
    9UpFBpCfZnHSGQaqeSwQlR8xG7VakfSJ25CZq1eNQSbCZeZJmvJsQ/134SBaHDRR
    uVfu1QQRrV2f3Lck0zbE64hfzBbQiBFWGTkRYhL1eLdAUBtCxKBFo09Y0hfQhVF1
    UUCIOB73zgQnY5XDq/R+uvSTi1d43ot4mmRfP7RddblFx//SJi2T99ja1HYsx8i0
    kX3rIMDYv3Djigr0/d/o8ISdP0ZCa8tLaOxVX9WUy/dPggsDSH6aZzQSviCXH/tc
    e5ojP+f1nz516j/v01+BlDBydU59QmeQ8L7Gqiwj29XcvRzk0wUlZSYDq9/W5nRZ
    xSzh5FcaNuDont84fFxI5Wu/lUe2hKCYhd67KYcLmb10V8if8a8Vcdeak9vbuRNk
    BhmVZGAh7l+rULLbZss6tsD+9sxgETelFQrJsaaDcMCM6HzX0oXPygp4Yw23jIsH
    BkqvNxlhTD4j054vIW2YLQAhCRDYrDRk19OHqxYhBAQnmGbxEgrSJW6FoNisNGTX
    04erq/0L/i7h/b6dWGAPkjSmXuJYy5SCIlEdzpH8+EZhl/joemzqT5gw+ns2NSAj
    HPEbgwsQmoqNrPaNKsOQ5UBsuDsyaUZqYSP4YIcSnhfE8e/AEI+h+7SeldAFi/+j
    wCNyCdoSqawph9vwP+luKFMdqVAYU47w2/CjAr2xojuQ2PRB21mUCNi0ZO+oOT4O
    uoFqPFE8pt8Dgt7CDMs8ak1u544QFwHnneAgcneGVTvBQovoqRSXV3YjUy4hWYR+
    FOAS6E+yDuX1/yv+bOtezBp4mBIKi1KmL4g1azj1l5bZ2IB32Hs6pMazeMNZ2/mw
    yq3OoxLTwH6yPDtJ/fiYH0mPiRnf1i0V7ZwEEFCiC5ghvlMh7jcaM6F6zlRNJ9fs
    HlIR/aoyNBcfBHB+3i/77T9A+DmydZ+FwLonoOonSXzys1rBWbfpqIhQfXWXk8ZV
    J9gopE5DUUCjbjsfUZk4Wn71Dm8B5t6+XCBy4K6875uwQ71la94noOD5OXBUg+R3
    wDBxCUOXAQ==
    =NQKd
    -----END PGP PUBLIC KEY BLOCK-----`);
  
    console.log("Copied PGP key to clipboard!");
    alert("Copied PGP key to clipboard!");
} 