"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[829],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,_=p["".concat(c,".").concat(f)]||p[f]||l[f]||s;return t?i.createElement(_,r(r({ref:n},u),{},{components:t})):i.createElement(_,r({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var d=2;d<s;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1479:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var i=t(3117),o=t(102),s=(t(7294),t(3905)),r=["components"],a={title:"sleepy_discord/voice_connection.cpp"},c=void 0,d={unversionedId:"reference/Files/voice__connection_8cpp",id:"reference/Files/voice__connection_8cpp",title:"sleepy_discord/voice_connection.cpp",description:"Source code",source:"@site/docs/reference/Files/voice__connection_8cpp.md",sourceDirName:"reference/Files",slug:"/reference/Files/voice__connection_8cpp",permalink:"/sleepy-discord/docs/reference/Files/voice__connection_8cpp",tags:[],version:"current",frontMatter:{title:"sleepy_discord/voice_connection.cpp"},sidebar:"Reference",previous:{title:"include/sleepy_discord/voice.h",permalink:"/sleepy-discord/docs/reference/Files/voice_8h"},next:{title:"include/sleepy_discord/voice_connection.h",permalink:"/sleepy-discord/docs/reference/Files/voice__connection_8h"}},u=[{value:"Source code",id:"source-code",children:[],level:2}],l={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"source-code"},"Source code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "voice_connection.h"\n#ifdef SLEEPY_VOICE_ENABLED\n#include <sodium.h>\n#include "client.h"\n\nnamespace SleepyDiscord {\n    VoiceConnection::VoiceConnection(BaseDiscordClient* client, VoiceContext& _context) :\n        origin(client), context(_context), UDP(*origin), sSRC(0), port(0), nextTime(0),\n#if !defined(NONEXISTENT_OPUS)\n        encoder(nullptr), decoder(nullptr),\n#endif\n        secretKey()\n    {}\n\n    void VoiceConnection::disconnect() {\n        stopSpeaking();\n        std::string update;\n        /*The number 103 comes from the number of letters in this string + 1:\n        {"op":4,"d":{"guild_id":"18446744073709551615","channel_id":null,"self_mute":false,"self_deaf":false}}\n        */\n        update.reserve(103);\n        update +=\n            "{"\n                "\\"op\\":4,"\n                "\\"d\\":{"\n                    "\\"guild_id\\":\\""; update += context.serverID; update += "\\","\n                    "\\"channel_id\\":null,"\n                    "\\"self_mute\\":false,"\n                    "\\"self_deaf\\":false"\n                "}"\n            "}";\n        origin->send(update, origin->connection);\n\n        State oldState = state;\n        state = static_cast<State>(state & ~State::CONNECTED);\n\n        if (oldState & State::CONNECTED)\n            origin->disconnect(1000, "", connection);\n        if (heart.isValid())\n            heart.stop(); //Kill\n        speechTimer.stop();\n        listenTimer.stop();\n        //deal with raw pointers\n        //Sorry about this c code, we are dealing with c libraries\n#ifndef NONEXISTENT_OPUS\n        if (encoder != nullptr) {\n            opus_encoder_destroy(encoder);\n            encoder = nullptr;\n        }\n        if (decoder != nullptr) {\n            opus_decoder_destroy(decoder);\n            decoder = nullptr;\n        }\n#endif // !NONEXISTENT_OPUS\n    }\n\n    void VoiceConnection::initialize() {\n        if (state == NOT_CONNECTED)\n            return;\n\n        std::string resume;\n        /*The number 77 comes from the number of letters in this string + 1:\n        {"op":7,"d":{"server_id":"18446744073709551615","session_id":"","token":""}}\n        */\n        resume.reserve(77 + context.sessionID.length() + context.token.length());\n        resume +=\n            "{"\n                "\\"op\\":7," //RESUME\n                "\\"d\\":{"\n                    "\\"server_id\\":\\"" ; resume += context.serverID ; resume += "\\","\n                    "\\"session_id\\":\\""; resume += context.sessionID; resume += "\\","\n                    "\\"token\\":\\""     ; resume += context.token    ; resume += "\\""\n                "}"\n            "}";\n        origin->send(resume, origin->connection);\n    }\n\n    void VoiceConnection::processMessage(const std::string &message) {\n        //json::Values values = json::getValues(message.c_str(),\n        //  { "op", "d" });\n        rapidjson::Document values;\n        values.Parse(message.c_str(), message.length());\n\n        VoiceOPCode op = static_cast<VoiceOPCode>(json::toInt(values["op"]));\n        json::Value& d = values["d"];\n        switch (op) {\n        case HELLO: {\n            heartbeatInterval = d["heartbeat_interval"].GetInt();\n\n            //Don\'t sent a identity during resumes\n            if (state & OPEN)\n                break;\n\n            std::string identity;\n            /*The number 116 comes from the number of letters in this string + 1:\n                {"op": 0,"d": {"server_id": "18446744073709551615",\n                "user_id": "18446744073709551615","session_id": "","token": ""}}\n            */\n            //remember to change the number below when editing identity\n            identity.reserve(116 + context.sessionID.length() + context.token.length());\n            identity +=\n                "{"\n                    "\\"op\\": 0," //VoiceOPCode::IDENTIFY\n                    "\\"d\\": {"\n                        "\\"server_id\\": \\"" ; identity += context.serverID ; identity += "\\","\n                        "\\"user_id\\": \\""   ; identity += origin->getID()  ; identity += "\\","\n                        "\\"session_id\\": \\""; identity += context.sessionID; identity += "\\","\n                        "\\"token\\": \\""     ; identity += context.token    ; identity += "\\""\n                    "}"\n                "}";\n            origin->send(identity, connection);\n            }\n            state = static_cast<State>(state | CONNECTED);\n            break;\n        case READY: {\n            //json::Values values = json::getValues(d->c_str(),\n            //{ "ssrc", "port" });\n            sSRC = d["ssrc"].GetUint();\n            port = static_cast<uint16_t>(d["port"].GetUint());\n            const json::Value& ipValue = d["ip"];\n            std::string ip(ipValue.GetString(), ipValue.GetStringLength());\n            //start heartbeating\n            heartbeat();\n            //connect to UDP\n            UDP.connect(ip, port);\n            //IP Discovery\n            unsigned char packet[70] = { 0 };\n            packet[0] = (sSRC >> 24) & 0xff;\n            packet[1] = (sSRC >> 16) & 0xff;\n            packet[2] = (sSRC >>  8) & 0xff;\n            packet[3] = (sSRC      ) & 0xff;\n            UDP.send(packet, 70);\n            UDP.receive([&](const std::vector<uint8_t>& iPDiscovery) {\n                //find start of string. 0x60 is a bitmask that should filter out non-letters\n                //the ip is in ascii starting with the 4th byte and is null terminated\n                std::vector<uint8_t>::const_iterator iPStart = iPDiscovery.begin() + 4;\n                const std::string iPAddress(iPStart, std::find(iPStart, iPDiscovery.end(), 0));\n                //send Select Protocol Payload\n                std::string protocol;\n                /*The number 101 comes from the number of letters in this string + 1:\n                    {"op": 1,"d": {"protocol": "udp","data": {\n                    "address": "","port": 65535,\n                    "mode": "xsalsa20_poly1305"}}}\n                */\n                protocol.reserve(101 + iPAddress.length());\n                protocol +=\n                    "{"\n                        "\\"op\\": 1," //VoiceOPCode::SELECT_PROTOCOL\n                        "\\"d\\": {"\n                            "\\"protocol\\": \\"udp\\","\n                            "\\"data\\": {"\n                                "\\"address\\": \\""; protocol += iPAddress           ; protocol += "\\","\n                                "\\"port\\": "     ; protocol += std::to_string(port); protocol +=   ","\n                                "\\"mode\\": \\"xsalsa20_poly1305\\""\n                            "}"\n                        "}"\n                    "}";\n                origin->send(protocol, connection);\n            });\n            }\n            state = static_cast<State>(state | State::OPEN);\n            break;\n        case SESSION_DESCRIPTION: {\n            consecutiveReconnectsCount = 0;  //succusful connection\n            const json::Value& secretKeyJSON = d["secret_key"];\n            json::Array secretKeyJSONArray = secretKeyJSON.GetArray();\n            const std::size_t secretKeyJSONArraySize = secretKeyJSONArray.Size();\n            for (std::size_t i = 0; i < secretKey.max_size() && i < secretKeyJSONArraySize; ++i) {\n                    secretKey[i] = secretKeyJSONArray[i].GetUint() & 0xFF;\n            }\n            }\n            state = static_cast<State>(state | State::AUDIO_ENABLED);\n            if (context.eventHandler != nullptr)\n                context.eventHandler->onReady(*this);\n            break;\n        case SPEAKING:\n            if (context.eventHandler != nullptr)\n                context.eventHandler->onSpeaking(*this);\n        case RESUMED:\n            consecutiveReconnectsCount = 0;\n            heartbeat();\n            break;\n        case HEARTBEAT_ACK:\n            if (context.eventHandler != nullptr)\n                context.eventHandler->onHeartbeatAck(*this);\n            break;\n        default:\n            break;\n        }\n    }\n\n    void VoiceConnection::processCloseCode(const int16_t code) {\n        State oldState = state;\n        state = static_cast<State>(state & ~State::CONNECTED);\n\n        switch (code) {\n        case 1000: //normal closure\n        case 1001:\n        case VOICE_SERVER_CRASHED:\n            if (oldState & State::CONNECTED)\n                disconnect();\n            getDiscordClient().removeVoiceConnectionAndContext(*this);\n            return;\n        default: break;\n        }\n\n        if (heart.isValid())\n            heart.stop(); //Kill\n\n        if (reconnectTimer.isValid()) //overwrite reconnect timer\n            reconnectTimer.stop();\n        reconnectTimer = origin->schedule([this]() {\n            origin->connect(getWebSocketURI(context.endpoint), this, connection);\n        }, getRetryDelay());\n        ++consecutiveReconnectsCount;\n    }\n\n    void VoiceConnection::heartbeat() {\n        //don\'t continue if not connected\n        if (!(state & CONNECTED))\n            return;\n\n        //timestamp int\n        const uint64_t bitMask52 = 0x1FFFFFFFFFFFFF;\n        const uint64_t currentTime = static_cast<uint16_t>(origin->getEpochTimeMillisecond());\n        const std::string nonce = std::to_string(bitMask52 & currentTime);\n        /*The number 17 comes from the number of letters in this string + 1:\n        {"op": 3, "d": }\n        */\n        std::string heartbeat;\n        heartbeat.reserve(17 + nonce.length());\n        heartbeat += \n            "{"\n                "\\"op\\": 3, "\n                "\\"d\\": "; heartbeat += nonce; heartbeat += \n            \'}\';\n        origin->send(heartbeat, connection);\n\n        if (context.eventHandler != nullptr)\n            context.eventHandler->onHeartbeat(*this);\n\n        heart = origin->schedule([this]() {\n            this->heartbeat();\n        }, heartbeatInterval);\n    }\n\n    inline void VoiceConnection::scheduleNextTime(AudioTimer& timer, TimedTask code, const time_t interval) {\n        timer.nextTime += interval;\n        time_t delay = timer.nextTime - origin->getEpochTimeMillisecond();\n        delay = 0 < delay ? delay : 0;\n\n        timer.timer = origin->schedule(code, delay);\n    }\n\n    void VoiceConnection::startSpeaking() {\n        if ((state & State::ABLE) != State::ABLE) return;\n\n        //init libraries if havn\'t and not encoded data\n        //init sodium\n        if (sodium_init() < 0)\n            return;\n\n        if (!audioSource->isOpusEncoded())\n#if defined(NONEXISTENT_OPUS)\n            return;\n#else\n            if (!(state & CAN_ENCODE) || encoder == nullptr) {\n                //init opus\n                int opusError = 0;\n                encoder = opus_encoder_create(\n                    /*Sampling rate(Hz)*/AudioTransmissionDetails::bitrate(),\n                    /*Channels*/         AudioTransmissionDetails::channels(),\n                    /*Mode*/             OPUS_APPLICATION_VOIP,\n                    &opusError);\n                if (opusError) {//error check\n                    return;\n                }\n                state = static_cast<State>(state | State::CAN_ENCODE);\n            }\n#endif\n\n        //say something\n        sendSpeaking(true);\n        state = static_cast<State>(state | State::SENDING_AUDIO);\n        speechTimer.nextTime = origin->getEpochTimeMillisecond();\n        speak();\n    }\n\n    void VoiceConnection::sendSpeaking(bool isNowSpeaking) {\n        std::string ssrc = std::to_string(sSRC);\n        /*The number 49 comes from 1 plus the length of this string\n            {"op":5,"d":{"speaking":false,"delay":0,"ssrc":}}\n        */\n        std::string speaking;\n        BasicAudioSourceForContainers::SpeakingFlag speakingFlag =\n            isNowSpeaking ? audioSource->speakingFlag :\n            static_cast< BasicAudioSourceForContainers::SpeakingFlag>(0);\n        speaking.reserve(49 + ssrc.length());\n        speaking +=\n            "{"\n                "\\"op\\":5,"\n                "\\"d\\":{"\n                    "\\"speaking\\":"; speaking += json::integer(speakingFlag); speaking += ","\n                    "\\"delay\\":0,"\n                    "\\"ssrc\\":"; speaking += ssrc; speaking +=\n                "}"\n            "}";\n        origin->send(speaking, connection);\n    }\n\n    void VoiceConnection::speak() {\n        //check that we are can still send audio data\n        if ((state & State::ABLE) != State::ABLE)\n            return;\n\n        AudioTransmissionDetails details(context, samplesSentLastTime);\n\n        std::size_t length = 0;\n\n        //send the audio data\n        if (audioSource->type == AUDIO_CONTAINER) {\n            auto audioVectorSource = &static_cast<BasicAudioSourceForContainers&>(*audioSource);\n            audioVectorSource->speak(*this, details, length);\n        } else {\n            AudioSample* audioBuffer = nullptr;\n            audioSource->read(details, audioBuffer, length);\n            speak(audioBuffer, length);\n        }\n\n        if ((state & SENDING_AUDIO) == 0) {\n            sendSpeaking(false);\n            context.eventHandler->onEndSpeaking(*this);\n            return;\n        }\n\n        //schedule next send\n        const time_t interval = static_cast<time_t>(\n            (static_cast<float>(length) / static_cast<float>(\n                AudioTransmissionDetails::bitrate() * AudioTransmissionDetails::channels()\n            )) * 1000.0f\n        );\n\n        scheduleNextTime(speechTimer,\n            [this]() {\n                this->speak();\n            }, interval\n        );\n    }\n\n    void VoiceConnection::speak(AudioSample*& audioData, const std::size_t & length)  {\n        samplesSentLastTime = 0;\n        //This is only called in speak() so already checked that we can still send audio data\n\n        //stop sending data when there\'s no data\n        if (length == 0) {\n            return stopSpeaking();\n        } else if ((state & SENDING_AUDIO) == 0) {\n            return;\n        }\n\n        //the >>1 cuts it in half since you are using 2 channels\n        const std::size_t frameSize = length >> 1;\n\n        if (!audioSource->isOpusEncoded()) {\n#if defined(NONEXISTENT_OPUS)\n            return;\n#else\n            //encode data\n            constexpr opus_int32 encodedAudioMaxLength =\n                static_cast<opus_int32>(AudioTransmissionDetails::proposedLength());\n            unsigned char encodedAudioData[encodedAudioMaxLength]; //11.52 kilobytes\n            opus_int32 encodedAudioLength = opus_encode(\n                encoder, audioData, static_cast<int>(frameSize),\n                encodedAudioData, encodedAudioMaxLength);\n            //send it\n            uint8_t * encodedAudioDataPointer = encodedAudioData;\n            sendAudioData(encodedAudioDataPointer, encodedAudioLength, frameSize);\n#endif\n        } else {\n            //encoded data should be in uint8\n            sendAudioData(reinterpret_cast<uint8_t*&>(audioData), length, frameSize);\n        }\n    }\n\n    void VoiceConnection::sendAudioData(\n        uint8_t*& encodedAudioData,\n        const std::size_t & length,\n        const std::size_t & frameSize\n    ) {\n#ifndef NONEXISTENT_SODIUM\n        ++sequence;\n        constexpr int headerSize = 12;\n\n        const uint8_t header[headerSize] = {\n            0x80,\n            0x78,\n            static_cast<uint8_t>((sequence  >> (8 * 1)) & 0xff),\n            static_cast<uint8_t>((sequence  >> (8 * 0)) & 0xff),\n            static_cast<uint8_t>((timestamp >> (8 * 3)) & 0xff),\n            static_cast<uint8_t>((timestamp >> (8 * 2)) & 0xff),\n            static_cast<uint8_t>((timestamp >> (8 * 1)) & 0xff),\n            static_cast<uint8_t>((timestamp >> (8 * 0)) & 0xff),\n            static_cast<uint8_t>((sSRC      >> (8 * 3)) & 0xff),\n            static_cast<uint8_t>((sSRC      >> (8 * 2)) & 0xff),\n            static_cast<uint8_t>((sSRC      >> (8 * 1)) & 0xff),\n            static_cast<uint8_t>((sSRC      >> (8 * 0)) & 0xff),\n        };\n            \n        uint8_t nonce[nonceSize];\n        std::memcpy(nonce                , header, sizeof header);\n        std::memset(nonce + sizeof header,      0, sizeof nonce - sizeof header);\n        \n        const size_t numOfBtyes = sizeof header + length + crypto_secretbox_MACBYTES;\n        std::vector<uint8_t> audioDataPacket(numOfBtyes);\n        std::memcpy(audioDataPacket.data(), header, sizeof header);\n\n        crypto_secretbox_easy(audioDataPacket.data() + sizeof header,\n            encodedAudioData, length, nonce, secretKey.data());\n\n        UDP.send(audioDataPacket.data(), audioDataPacket.size());\n        samplesSentLastTime = frameSize << 1;\n        timestamp += static_cast<uint32_t>(frameSize);\n#else\n    #error Can not use voice without libsodium, libsodium not detected.\n#endif\n    }\n\n    //To do test this\n    void VoiceConnection::startListening() {\n        if (!(state & CAN_DECODE) || decoder == nullptr) {\n            int opusError = 0;\n            decoder = opus_decoder_create(\n                /*Sampling rate(Hz)*/AudioTransmissionDetails::bitrate(),\n                /*Channels*/         AudioTransmissionDetails::channels(),\n                &opusError);\n            if (opusError) {//error check\n                return;\n            }\n        }\n        listen();\n    }\n\n    void VoiceConnection::listen() {\n        UDP.receive([this](const std::vector<uint8_t>& data){\n            processIncomingAudio(data);\n        });\n\n        scheduleNextTime(listenTimer,\n            [this]() {\n                this->listen();\n            },  AudioTransmissionDetails::proposedLengthOfTime()\n        );\n    }\n\n    void VoiceConnection::processIncomingAudio(const std::vector<uint8_t>& data)\n    {\n#if !defined(NONEXISTENT_SODIUM) || !defined(NONEXISTENT_OPUS)\n        //get nonce\n        uint8_t nonce[nonceSize];\n        std::memcpy(nonce, data.data(), sizeof nonce);\n        //decrypt\n        std::vector<uint8_t> decryptedData;\n        const std::size_t decryptedDataSize = data.size() - sizeof nonce;\n        decryptedData.reserve(decryptedDataSize);\n        bool isForged = crypto_secretbox_open_easy(\n            decryptedData.data(),\n            data.data() + sizeof nonce,\n            decryptedDataSize, nonce, secretKey.data()\n        ) != 0;\n        if (isForged)\n            return;\n        //decode\n        constexpr opus_int32 frameSize = \n            static_cast<opus_int32>(AudioTransmissionDetails::proposedLength());\n        BaseAudioOutput::Container decodedAudioData;\n        opus_int32 decodedAudioLength = opus_decode(\n            decoder, decryptedData.data(), static_cast<int>(decryptedData.size()),\n            decodedAudioData.data(), frameSize, 1);\n        if(decodedAudioLength < OPUS_OK || !hasAudioOutput())\n            return;\n        AudioTransmissionDetails details(context, 0);\n        audioOutput->write(decodedAudioData, details);\n#endif\n    }\n}\n#else\nvoid SleepyDiscord::VoiceConnection::initialize() {}\nvoid SleepyDiscord::VoiceConnection::processMessage(const std::string &/*message*/) {}\nvoid SleepyDiscord::VoiceConnection::processCloseCode(const int16_t /*code*/) {}\n#endif\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}p.isMDXComponent=!0}}]);