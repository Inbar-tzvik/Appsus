export default {
    props: ['info'],
    template: `
    <div>
        <iframe :src="videoUrl" width="80%" height="300px"></iframe>
    </div>
    `,
    computed: {
        videoUrl(){
            const videoUrl = this.info.url; 
            const idStart = videoUrl.indexOf('=') + 1;
            const videoId = videoUrl.substring(idStart);
            return `https://www.youtube.com/embed/${videoId}`
        }
    }
}