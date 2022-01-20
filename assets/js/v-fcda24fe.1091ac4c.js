"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48224],{48678:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-fcda24fe",path:"/devices/HGZB-41.html",title:"Nue / 3A HGZB-41 control via MQTT",lang:"en-US",frontmatter:{title:"Nue / 3A HGZB-41 control via MQTT",description:"Integrate your Nue / 3A HGZB-41 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HGZB-41.md",git:{updatedTime:1642679725e3}}},495:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="nue-3a-hgzb-41" tabindex="-1"><a class="header-anchor" href="#nue-3a-hgzb-41" aria-hidden="true">#</a> Nue / 3A HGZB-41</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HGZB-41</td></tr><tr><td>Vendor</td><td>Nue / 3A</td></tr><tr><td>Description</td><td>Smart one gang wall switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HGZB-41.jpg" alt="Nue / 3A HGZB-41"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Reset of device is done by holding button for 20 secs until it starts to flash green. It will now automatically pair.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);