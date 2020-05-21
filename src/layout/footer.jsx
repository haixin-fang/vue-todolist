import '../assets/styles/footer.styl'

export default {
    data () {
        return {
            author: '方海鑫'
        }
    },
    render () {
        return (
            <div id="footer">
                <span>written by {this.author}</span>
            </div>
        )
    }
}
