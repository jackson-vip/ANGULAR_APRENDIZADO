import zxcvbn from "zxcvbn";

export const getPasswordStrengthValue = (password: string): number => {
    // Se a senha for vazia, retorna 0
    if ( !password ) return 0;

    const resoult = zxcvbn(password);

    const WEAK_PASSWORD_SCORE = resoult.score <= 1;
    const MEDIUM_PASSWORD_SCORE = resoult.score <= 3;
    const STRONG_PASSWORD_SCORE = resoult.score === 4;

    if ( WEAK_PASSWORD_SCORE ) return 33;
    if ( MEDIUM_PASSWORD_SCORE ) return 66;
    if ( STRONG_PASSWORD_SCORE ) return 100;

    return 0;
};