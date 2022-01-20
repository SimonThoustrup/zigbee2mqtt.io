"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74608],{8801:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-158787de",path:"/devices/STS-OUT-US-2.html",title:"SmartThings STS-OUT-US-2 control via MQTT",lang:"en-US",frontmatter:{title:"SmartThings STS-OUT-US-2 control via MQTT",description:"Integrate your SmartThings STS-OUT-US-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-11-12T18:58:33.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/STS-OUT-US-2.md",git:{updatedTime:1642679725e3}}},83949:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const r=(0,i(66252).uE)('<h1 id="smartthings-sts-out-us-2" tabindex="-1"><a class="header-anchor" href="#smartthings-sts-out-us-2" aria-hidden="true">#</a> SmartThings STS-OUT-US-2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>STS-OUT-US-2</td></tr><tr><td>Vendor</td><td>SmartThings</td></tr><tr><td>Description</td><td>Zigbee smart plug with power meter</td></tr><tr><td>Exposes</td><td>switch (state), power, current, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/STS-OUT-US-2.jpg" alt="SmartThings STS-OUT-US-2"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),o={},a=(0,i(83744).Z)(o,[["render",function(e,t){return r}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);