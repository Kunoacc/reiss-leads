import vue from "vue"

export default function({ store }, inject){
    const event = new vue()
    inject('events', event)
}