interface student {
    name : string,
    class: string,
    address: string
}

interface developer extends student{
    language: string,
    company: string
}

const Zakir: developer = {
    language: "TypeScript",
    company: "OTAE",
    name : "Zakir",
    class: "UEF",
    address: "UEF, Finland"
}