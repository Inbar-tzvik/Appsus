export default {
    props: ['info'],
    template: `
    <div>
        <h1>{{info.txt}}</h1>
    </div>
    `,
    data(){
        return{
            isHover: false
        }
    },
    methods: {
        hover(isHover){
            this.isHover = isHover
        }
    }
}