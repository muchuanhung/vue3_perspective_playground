Vue.createApp({

    data() {
    //宣告
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    //計算
    computed: {
        box() {
            return {
                transform:`
                    perspecitve (${this.perspective}px)
                    rotateX (${this.rotateX}deg)
                    rotateY (${this.rotateY}px)
                    rotateZ (${this.rotateZ}px)
                `
            }
        }
    },
    //重置
    method {
        reset () {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        copy () {
            const el = document.createElement ('textarea')
            el.setAttribute('readonly','')
            el.style.position = 'absoluate'
            el.style.left = '-9999px'
            el.value = `transform: ${this.box.transform}`
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
        }
    }

}).mount('#app')