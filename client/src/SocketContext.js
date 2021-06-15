// All socket logics

import React, { createConext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createConext();

const socket = io('http://localhost:5000'); //server; after deployment, mention full url of deployment server

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);

    const myVideo = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);

                myVideo.current.srcObject = currentStream;
            })
    });
}