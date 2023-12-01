//PRÁTICA GUIADA - Parte 1
//Crie um sistema de cadastro de usuários que contenha:

// 1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password;
type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string
}


// 2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
type AdminAccount = {
    account: string,
    permission: USER_ROLES
}

type NormalAccount = {
    account: string,
    permission: USER_ROLES
}

// 2.1 Criando ENUM
// Prática2 - Item 1. Enum com valores ADMIN e NORMAL e atribua a propriedade permission de AdminAccount e NormalAccount;
enum USER_ROLES {
    ADMIN = "admin",
    NORMAL = "normal"
} 

// 3. Crie exemplos de usuários Admin e Normal;
// Prática2 - Item 2. Tipo Intersection unindo: pessoa(Person) + permissão (Account);
type AdminUser = TPerson & AdminAccount // Intersection Union

type NormalUser = TPerson & NormalAccount

// Agora sim o item 3 da Prática 1
const user1: AdminUser = {
    id: "u001",
    name: "Leo",
    email: "leon@email.com",
    password: "leo123",
    account: "admin",
    permission: USER_ROLES.ADMIN // "admin"
}

const user2: NormalUser = {
    id: "u002",
    name: "Nena",
    email: "nena@email.com",
    password: "nena123",
    account: "normal",
    permission: USER_ROLES.NORMAL
}


// PRÁTICA GUIADA - Parte 2
// Vamos continuar nosso sistema de cadastro de usuários criando:

// 1. Enum com valores ADMIN e NORMAL e atribua a propriedade permission de AdminAccount e NormalAccount;
// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Account);

// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Account;
const users: AdminUser[] | NormalUser[] = [
    user1,
    user2
]

console.log("Users:",users)