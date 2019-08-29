export interface UserInfo {
    email: string,
    emailVerified: boolean,
    displayName?: string | null,
    phoneNumber?: string | null,
    photoURL?: string | null,
    firstname?: string,
    lastname?: string,
    address1?: string,
    address2?: string,
    city?: string,
    postalCode?: string,
    country?: string
}