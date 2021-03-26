const { v4: uuidv4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    /** Constructor de la tarea
     * @param : descripcion es requerida
     */
    constructor(_desc) {
        this.id = uuidv4();
        this.desc = _desc;
    }
}

module.exports = Tarea