declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CF_PAGES_BRANCH?: string
            CF_PAGES_COMMIT_SHA?: string
        }
    }
}

export {}
