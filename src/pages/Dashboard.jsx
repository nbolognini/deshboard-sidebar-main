import React from 'react';
import ReactPlayer from 'react-player';
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { useState } from 'react';
import { Button } from './estilosJS/Buttons';

const Dashboard = () => {

    
    return <div>
         <Contenedor>	
			<Contenedor_Senales>
				<Senales>
                    <Titulo>
                    Canal26 <br></br>
						Youtube
						<iframe width="264" height="198" src="https://www.youtube.com/embed/2IfTdw28WFY?mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				    </Titulo>
				</Senales>
                <Senales>
					<Titulo>
						Canal26<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted  width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						Canal26 Fifa Tv<br></br>
						HLS (opterCast)<br></br><br></br>
						<ReactPlayer controls muted  width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						Telemax
						<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
                    <Titulo>
						MusicTop
						<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						TierraMia
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted  width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						LatinaTV
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted  width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						TlcPreview
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted  width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />					
                    </Titulo>
				</Senales>
			</Contenedor_Senales>
		</Contenedor>

 </div>



};

export default Dashboard;