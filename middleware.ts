// Middleware base para protección de rutas admin.
// La validación completa Supabase Auth + admin_users se integra en el flujo final.
export function middleware(){}

export const config = {
 matcher:["/admin/:path*"]
}
