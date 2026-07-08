# Proceso de Sincronización y Despliegue (cPanel + GitHub Actions)

Este documento sirve como registro interno de cómo está configurada la sincronización automática de la landing page de Empanadas Factory hacia el servidor de producción en cPanel.

## Arquitectura de Despliegue Automático (CI/CD)

El proyecto utiliza **GitHub Actions** para automatizar el proceso de construcción (build) de Next.js y la transferencia de archivos al servidor cPanel a través de FTP.

### ¿Cómo se activa?
Cada vez que se suben cambios a la rama `main` de GitHub (ya sea mediante el script local `deploy.bat` o comandos de git), GitHub Actions detecta el cambio y ejecuta automáticamente el archivo de configuración oculto `.github/workflows/deploy.yml`.

### Flujo de Trabajo (Workflow)
El proceso en los servidores de GitHub realiza los siguientes pasos:
1. **Checkout:** Descarga el código fuente más reciente.
2. **Setup Node:** Prepara un entorno virtual usando Node.js v20.
3. **Instalación:** Ejecuta `npm install` para instalar las dependencias exactas del proyecto.
4. **Construcción (Build):** Ejecuta `npm run build` (Next.js en modo `output: 'export'`) para generar una versión web completamente estática optimizada dentro de la carpeta `out/`.
5. **Transferencia FTP:** Utiliza la acción `SamKirkland/FTP-Deploy-Action@v4.3.4` para conectarse al servidor y sincronizar únicamente el contenido de la carpeta `out/` hacia el servidor.

---

## Configuración del Servidor cPanel (FTP)

Para garantizar la seguridad, el despliegue NO se hace con el usuario principal del cPanel, sino con un usuario FTP restringido.

**Datos de la Cuenta FTP Dedicada:**
- **Usuario:** `github@dazajulio.com`
- **Directorio Raíz:** `/home/juliodaz/empanadasfactory.dazajulio.com`
- **Ruta destino en GitHub Actions:** `./` (Dado que el usuario de FTP ya aterriza directamente en la carpeta del subdominio, no es necesario navegar a otras carpetas).

---

## Variables Secretas en GitHub

Para que la conexión FTP funcione, el repositorio de GitHub (Settings > Secrets and variables > Actions) debe tener configuradas de forma permanente las siguientes 3 variables (Secrets):

- `FTP_SERVER` -> `ftp.dazajulio.com`
- `FTP_USERNAME` -> `github@dazajulio.com`
- `FTP_PASSWORD` -> [Contraseña segura creada en cPanel para este usuario]

*Si la contraseña de esta cuenta FTP se cambia alguna vez en cPanel, DEBE actualizarse también en el secreto `FTP_PASSWORD` dentro de GitHub, o los despliegues automáticos fallarán.*

---

## Solución de Problemas Comunes

1. **GitHub Actions se detiene a los ~20 segundos (Exit code 1):**
   Asegúrate de que las acciones en `deploy.yml` estén usando `v4` y Node 20. Versiones antiguas de las librerías de GitHub (`v3` o Node 18) pueden haber sido deprecadas por GitHub.
2. **Los archivos no aparecen en la página web después de un despliegue exitoso:**
   Verifica en cPanel que la cuenta FTP `github@dazajulio.com` tenga asignado el directorio correcto (`/home/juliodaz/empanadasfactory.dazajulio.com`). Si tiene asignado `public_html/`, los archivos de Empanadas Factory sobreescribirán la web principal.
3. **El script `deploy.bat` se traba subiendo archivos muy grandes:**
   Asegúrate de que el archivo `out.zip` (o cualquier otro empaquetado) esté correctamente listado dentro del archivo `.gitignore`. GitHub bloquea subidas de archivos mayores a 100MB.
