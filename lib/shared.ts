// Importa o tipo ReadonlyURLSearchParams da navegação do Next.js
import { ReadonlyURLSearchParams } from "next/navigation";

// Define um conjunto de URLs permitidas para callback
const allowedCallbackSet: ReadonlySet<string> = new Set([
    '/dashboard',
    '/device',
]);


/**
 * Retorna uma URL de callback válida a partir dos parâmetros da query.
 * Se a URL informada não estiver no conjunto permitido, retorna '/dashboard'.
 * @param queryParams Parâmetros da query da URL
 * @returns URL de callback válida
 */
export const getCallbackURL = (
    queryParams: ReadonlyURLSearchParams,
): string => {
    // Obtém o valor do parâmetro 'callbackUrl' da query
    const callbackUrl = queryParams.get('callbackUrl');
    if(callbackUrl){
        // Verifica se a URL está no conjunto permitido
        if(allowedCallbackSet.has(callbackUrl)){
            return callbackUrl;
        }
        // Se não estiver, retorna '/dashboard' como padrão
        return '/dashboard';
    }
    // Se não houver parâmetro, retorna '/dashboard' como padrão
    return '/dashboard';
};