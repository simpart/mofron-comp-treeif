/**
 * @file   mofron-comp-treeif/index.js
 * @brief  tree interface for mofron
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');

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
            this.prmMap(['treeKey', 'treeValue']);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    load (prm) {
        try {
            for (let pidx in prm) {
                let tchd = new mf.comp.TreeIF(pidx);
                if ('string' !== typeof prm[pidx]) {
                    /* key-object */
                    tchd.load(prm[pidx]);
                    this.treeChild(tchd);
                } else {
                    /* key-value */
                    tchd.treeValue(prm[pidx]);
                    this.treeChild(tchd);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    isIndex () {
        try {
            if (null == this.treeValue()) {
                return true;
            }
            return false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    treeKey (prm) {
        try { return this.member('treeKey', 'string', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    treeValue (prm) {
        try { return this.member('treeValue', 'string', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    treeChild (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'TreeIF')) {
                prm.execOption({ treeParent : this });
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
    
    treeComp (prm) {
        try { return this.member('treeComp', ['Component'], prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TreeIF;
/* end of file */
