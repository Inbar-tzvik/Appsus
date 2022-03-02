export default {
    props: ['info'],
    template: `
    <div>
        <img :src="info.url" alt="">
    </div>
    `
}