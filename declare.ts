import { userHasRole } from "./plugins/access"

declare global{
    interface NuxtApp{
        $userHasRole: typeof userHasRole
    }
}