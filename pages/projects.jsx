import Head from 'next/head'
const axios = require('axios')

import Layout from '../components/layout'

export default function Projects({ projects }) {
    console.log(projects)
    const projectsMap = projects.map(project => {
        return (
            <div>
                <h2>{project.title}</h2>
                <p>{project.copy}</p>
            </div>
        )
    })
    return (
        <Layout>
            <section>
                <h1>Projects</h1>
                <hr />
                {projectsMap}
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    let projects
    await axios.get('http://localhost:1337/projects')
        .then(function (response) {
            projects = response.data
        })
    return {
        props: {
            projects
        }
    }
}