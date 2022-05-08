import { Signer } from "ethers";
import { ethers } from "ethers";
import React, {useState} from "react";
import MYERC20 from "../artifacts/contracts/MYERC20.sol/MYERC20.json";

const contAdd = "0x27f1610EB1B0FB84563e3880d465C41a3Cd679dB";//ganache 

const Write = ()=>{
    const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const singer = provider.getSigner();
    const contract = new ethers.Contract(contAdd, MYERC20.abi, singer);
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [address1, setAddress1] = useState("");

    const apphand = async ()=>{
        let tx = await contract.approve(address, amount);
        await tx.wait();
    }
    const trahand = async ()=>{
        let tx = await contract.transfer(address, amount);
        await tx.wait();
    }
    const trafromhand = async ()=>{
        let tx = await contract.transfer(address, address1, amount);
        await tx.wait();
    }

    return(
        <>
        <h1>Approve Tokens</h1>
        <input value={ address } placeholder="address" onChange={(e)=>setAddress(e.target.value)} />
        <input value={ amount } placeholder="amount" onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={ apphand }>Approve</button>
        <h1>Transfer Tokens</h1>
        <input value={ address } placeholder="address" onChange={(e)=>setAddress(e.target.value)} />
        <input value={ amount } placeholder="amount" onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={ trahand }>Transfer</button>
        <h1>Transfer From Tokens</h1>
        <input value={ address } placeholder="from" onChange={(e)=>setAddress(e.target.value)} />
        <input value={ address1 } placeholder="to" onChange={(e)=>setAddress1(e.target.value)} />
        <input value={ amount } placeholder="amount" onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={ trafromhand }>TransferFrom</button>
        </>
    )
}
export default Write;