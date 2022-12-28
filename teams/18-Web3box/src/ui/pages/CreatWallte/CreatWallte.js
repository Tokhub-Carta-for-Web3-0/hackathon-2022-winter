import React, { useState, useEffect ,createContext} from "react";
import './CreatWallte.scss';
//react-redux
import { connect, useDispatch, useSelector } from 'react-redux';
import { setAccount, setSeed ,setethAddress, setAddress} from '../../store/action';
import SuperChain from '../SuperChain/SuperChain';
import { useNavigate } from 'react-router-dom';
import Top from '../../images/spile_left.png';
import Warring from '../../images/warring.png';
import CreatWalletFile from '../CreatWalletFile/CreatWalletFile'
import Pc from '../../images/pc.png';
import { Button, Select, message } from 'antd';
import { postWallet, initWallet } from '../../../substrate/walletManager';
import { knownSubstrate } from '../../../substrate/network';
import { Json } from "@polkadot/types";
const { UserService }  = require("../../store/user");
const { knownGenesis, handle, cryptoWaitReady } = require('../../../substrate/polkadot');

const { Option } = Select;
// const {   knownGenesis,handle,cryptoWaitReady } = require('../../api/polkadot');
export const CreatWalletContext = createContext({});
function CreatWallte(props) {
    // console.log(props)
    const { setAccount,setethAddress, dispatch } = props
    const Navigate = useNavigate();
    const outWalletRouter = (props) => {
        console.log(props)
        Navigate('/Wallet')
    };
    useEffect(() => {
        initWallet(1)
    }, [])
    const [passwords, setPasswords] = useState('');
    const [passwordv, setPasswordv] = useState('');
    const [styleHiden, setStyleHiden] = useState(false);
    const [seed, setSeed] = useState(false);
    const [list, setlist] = useState([]);
    const [loadings, setLoadings] = useState(false);

    
    const creatAccount = () => {
        if (passwords == passwordv && passwords !== '') {
            postWallet(1, 'pol.mnemonicGenerate', {}).then(res => {
                let ps2={
                    mnemonic:res,
                  } 
                postWallet(1, 'pol.seedCreateAddress', ps2 ).then(res => {
                    dispatch(setAccount(res.address))
                    dispatch(setethAddress(res.ethaddress))
                    setSeed(res.seed)
                    let genesisHash = '';
                    CreatWallet(genesisHash, 'xxx', res.seed, res.address, passwordv)
                })
            });
        }
        else {
            message.error('Failed to set password !');
        }

    }

    const CreatWallet = async (genesisHash, name, seed, address, oldpasswd) => {
        const data = {
            genesisHash,
            name,
            seed,
            address,
            oldpasswd,
        };
        await postWallet(1, 'pol.saveAccountsCreate', data).then(res => {
            // console.log(res)
            if (res) {
                setStyleHiden(res)
            }
        });
    }
    const password = (value) => {
        // console.log(value.target.value)
        setPasswords(value.target.value)
    }
    const password_void = (value) => {
        setPasswordv(value.target.value)
        // console.log(value.target.value)

    }
    return (

        <div className="CreatWallet" >
            <div className='top_'>
                <img onClick={outWalletRouter} src={Top}></img>
                <span>Create wallet</span>
            </div>
            <div className={!styleHiden?'CreatWallet_c':'singe'}>
                <div className='networks'>
                    <p><img src={Pc}></img><span>Select Networks</span></p>
                    <Select className='select_main' defaultValue="Polkadot">
                        <Option value="Polkadot">Polkadot</Option>

                    </Select>
                </div>

                <from>
                    <p>New Password</p>
                    <input type='password' placeholder='Password' onChange={password}></input>
                    <p>Confirm password</p>
                    <input type='password' placeholder='Password' onChange={password_void}></input>
                    <h6><img src={Warring}></img>Keep your own password and avoid sharing it to anyone.</h6>
                    <div className='Confirm_c'>
                        <Button onClick={outWalletRouter} src={Top} className='Cancel'>Cancel</Button>
                        <Button onClick={creatAccount} className='Confirm'>Confirm</Button>
                    </div>
                </from>
            </div>
            <CreatWalletContext.Provider
                value={{
                    seed: seed,
                    password:passwordv,
                    list:list
                }}
            >
                {
                    styleHiden?<CreatWalletFile></CreatWalletFile>:''
                }
            </CreatWalletContext.Provider>
            <SuperChain></SuperChain>
        </div>

    )
}
const mapDispatchToProps = () => {
    return {
        setAccount,
        setethAddress
    }
}
export default connect(mapDispatchToProps)(CreatWallte)
