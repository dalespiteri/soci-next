const axios = require('axios')

import Layout from '../components/layout'

export default function Slider({ sliders }) {
    console.log(sliders)
    const slides = sliders[0].slides.map(slide => {
        return (
            <div className="slide">
                <h2>{slide.title}</h2>
                <p>{slide.caption}</p>
                <img src={'http://localhost:1337' + slide.image.url} alt="" />
            </div>
        )
    })
    return (
        <Layout>
            <section>
                <h1>Slider</h1>
                <hr />
                <div className="slider">
                    {slides}
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const sliders = await axios.get('http://localhost:1337/sliders')
        .then(res => res.data)
    return {
        props: {
            sliders
        }
    }
}