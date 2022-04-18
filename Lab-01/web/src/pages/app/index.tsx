// import { getSession, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { GetServerSideProps } from "next";


export default function Home() {
    const { user } = useUser()

    return (
        <div>
            <h1>Hello World</h1>

            <pre>
               {JSON.stringify(user, null, 2)} 
            </pre>

        </div>

    )
}

export const getServerSideProps = withPageAuthRequired();


// o codigo comentado que verifica se o usuário esta logado pode ser substitído pelo withPageAuthRequired() do próprio auth0
// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//     const session = getSession(req, res);

//     if (!session) {
//         return {
//             redirect: {
//                 destination: 'api/auth/login',
//                 permanent: false,
//             }
//         }
    
//     }

//     return {
//         props: {},
//     }
// }
