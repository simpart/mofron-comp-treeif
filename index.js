/**
 * @file   mofron-comp-treeif/index.js
 * @brief  tree interface for mofron
 * @author simpart
 */
const mf = require('mofron');
mf.comp.TreeIF = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('TreeIF');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            super.initDomConts();
            this.child(this.treeComp());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    treeComp (prm) {
        try { return this.innerComp('treeComp', 'Component', prm, mf.Component); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    keyComp (prm) {
        try {
            let ret = this.member('keyComp', 'Component', prm);
            if ( (undefined !== prm) && ('key' === this.type()) ) {
                this.treeComp(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    valComp (prm) {
        try {
            let ret = this.member('valComp', 'Component', prm);
            if ( (undefined !== prm) && ('value' === this.type()) ) {
                this.treeComp(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            let ret = this.member('type', ['key', 'value'], prm);
            if (undefined !== prm) {
                this.treeComp(
                    ('key' === prm) ? this.keyComp() : this.valComp()
                );
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    treeChild (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'TreeIF')) {
                prm.executeOption({ treeParent : this });
            }
            return this.arrayMember('treeChild', 'Component', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    treeParent (prm) {
        try { return this.member('treeParent', ['Component'], prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TreeIF;
/* end of file */
