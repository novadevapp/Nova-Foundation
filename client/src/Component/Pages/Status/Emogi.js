import React from 'react'

export const Cry = ({onClick, fill}) => {
    return (
    <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM39.5161 38.5156V27.3438C39.5161 26.0547 38.4274 25 37.0968 25C35.7661 25 34.6774 26.0547 34.6774 27.3438V42.1289C31.8044 43.6523 28.5081 44.5312 25 44.5312C21.4919 44.5312 18.1956 43.6523 15.3226 42.1289V27.3438C15.3226 26.0547 14.2339 25 12.9032 25C11.5726 25 10.4839 26.0547 10.4839 27.3438V38.5156C6.99597 35 4.83871 30.2441 4.83871 25C4.83871 14.2285 13.881 5.46875 25 5.46875C36.119 5.46875 45.1613 14.2285 45.1613 25C45.1613 30.2441 43.004 35.0098 39.5161 38.5156ZM20.746 22.9004C21.1895 22.666 21.4415 22.1777 21.3609 21.6895C20.9577 19.2285 17.9133 17.5781 15.3327 17.5781C12.752 17.5781 9.69758 19.2285 9.30444 21.6895C9.22379 22.1777 9.47581 22.666 9.91936 22.9004C10.3629 23.1348 10.9173 23.0762 11.3004 22.7441L12.2581 21.9141C13.75 20.625 16.9153 20.625 18.4073 21.9141L19.3649 22.7441C19.6169 22.9688 20.1613 23.2129 20.746 22.9004ZM34.6774 17.5781C32.0867 17.5781 29.0423 19.2285 28.6492 21.6895C28.5686 22.1777 28.8206 22.666 29.2641 22.9004C29.7177 23.1348 30.2621 23.0762 30.6452 22.7441L31.6028 21.9141C33.0948 20.625 36.2601 20.625 37.752 21.9141L38.7097 22.7441C38.9617 22.959 39.5161 23.2031 40.0907 22.9004C40.5343 22.666 40.7863 22.1777 40.7056 21.6895C40.3125 19.2285 37.2681 17.5781 34.6774 17.5781ZM25 26.5625C21.8851 26.5625 19.3548 29.3652 19.3548 32.8125C19.3548 36.2598 21.8851 39.0625 25 39.0625C28.1149 39.0625 30.6452 36.2598 30.6452 32.8125C30.6452 29.3652 28.1149 26.5625 25 26.5625Z" fill={fill}/>
    </svg>
    );
} 

export const Laugh = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.7273 0.78125C10.1723 0.78125 0 10.9535 0 23.5085C0 36.0635 10.1723 46.2358 22.7273 46.2358C35.2823 46.2358 45.4545 36.0635 45.4545 23.5085C45.4545 10.9535 35.2823 0.78125 22.7273 0.78125ZM35.6855 36.4667C32.2214 39.9308 27.621 41.837 22.7273 41.837C17.8336 41.837 13.2331 39.9308 9.76906 36.4667C6.30499 33.0027 4.39883 28.4022 4.39883 23.5085C4.39883 18.6148 6.30499 14.0144 9.76906 10.5503C13.2331 7.08624 17.8336 5.18008 22.7273 5.18008C27.621 5.18008 32.2214 7.08624 35.6855 10.5503C39.1496 14.0144 41.0557 18.6148 41.0557 23.5085C41.0557 28.4022 39.1496 33.0027 35.6855 36.4667ZM30.0587 13.9777C27.8776 13.9777 25.2291 16.6628 24.9267 20.521C24.8625 21.3091 25.9164 21.6115 26.2922 20.9334L27.1628 19.3755C27.8684 18.12 28.9223 17.396 30.0495 17.396C31.1767 17.396 32.2306 18.12 32.9362 19.3755L33.8068 20.9334C34.1826 21.6115 35.2364 21.2999 35.1723 20.521C34.8882 16.6628 32.2397 13.9777 30.0587 13.9777ZM11.6386 20.9334L12.5092 19.3755C13.2148 18.12 14.2687 17.396 15.3959 17.396C16.5231 17.396 17.577 18.12 18.2826 19.3755L19.1532 20.9334C19.529 21.6115 20.5828 21.2999 20.5187 20.521C20.2163 16.6628 17.5678 13.9777 15.3867 13.9777C13.2056 13.9777 10.5572 16.6628 10.2548 20.521C10.1998 21.2999 11.2537 21.6115 11.6386 20.9334ZM33.2111 26.4411H12.2434C11.4919 26.4411 10.9146 27.0826 11.0062 27.8157C11.6935 33.2409 16.404 37.4381 22.1041 37.4381H23.3504C29.0506 37.4381 33.761 33.2409 34.4483 27.8157C34.54 27.0826 33.9626 26.4411 33.2111 26.4411Z" fill={fill}/>
        </svg>
    );
} 
export const Smile = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM25 44.5312C13.881 44.5312 4.83871 35.7715 4.83871 25C4.83871 14.2285 13.881 5.46875 25 5.46875C36.119 5.46875 45.1613 14.2285 45.1613 25C45.1613 35.7715 36.119 44.5312 25 44.5312ZM33.4677 30.5273C31.371 32.9688 28.2762 34.375 25 34.375C21.7238 34.375 18.629 32.9785 16.5323 30.5273C15.6754 29.5313 14.1532 29.4043 13.125 30.2246C12.0968 31.0547 11.9657 32.5293 12.8125 33.5254C15.8367 37.041 20.2823 39.0527 25 39.0527C29.7177 39.0527 34.1633 37.041 37.1875 33.5254C38.0444 32.5293 37.9032 31.0547 36.875 30.2246C35.8468 29.4043 34.3246 29.5313 33.4677 30.5273V30.5273ZM13.7601 20.6055C14.5363 19.2676 15.6956 18.4961 16.9355 18.4961C18.1754 18.4961 19.3347 19.2676 20.1109 20.6055L21.0685 22.2656C21.2802 22.627 21.6935 22.7246 22.006 22.627C22.369 22.5195 22.6109 22.1875 22.5806 21.8164C22.248 17.7051 19.3347 14.8438 16.9355 14.8438C14.5363 14.8438 11.623 17.7051 11.2903 21.8164C11.2601 22.1777 11.502 22.5195 11.8649 22.627C12.2077 22.7344 12.6109 22.5781 12.8024 22.2656L13.7601 20.6055ZM33.0645 14.8438C30.6653 14.8438 27.752 17.7051 27.4194 21.8164C27.3891 22.1777 27.631 22.5195 27.994 22.627C28.3468 22.7344 28.7399 22.5781 28.9315 22.2656L29.8891 20.6055C30.6653 19.2676 31.8246 18.4961 33.0645 18.4961C34.3044 18.4961 35.4637 19.2676 36.2399 20.6055L37.1976 22.2656C37.4093 22.627 37.8226 22.7246 38.1351 22.627C38.498 22.5195 38.7399 22.1875 38.7097 21.8164C38.377 17.7051 35.4637 14.8438 33.0645 14.8438Z" fill={fill}/>
        </svg>
    );
} 
export const Frown = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM13.7097 20.3125C13.7097 18.584 15.1512 17.1875 16.9355 17.1875C18.7198 17.1875 20.1613 18.584 20.1613 20.3125C20.1613 22.041 18.7198 23.4375 16.9355 23.4375C15.1512 23.4375 13.7097 22.041 13.7097 20.3125ZM32.5907 38.2129C29.4456 37.2754 26.6028 36.7188 25 36.7188C23.3972 36.7188 20.5544 37.2754 17.4093 38.2129C16.25 38.5547 15.1411 37.5977 15.3427 36.4453C16.0484 32.5391 21.4012 30.4688 25 30.4688C28.5988 30.4688 33.9516 32.5488 34.6573 36.4453C34.8589 37.6074 33.7399 38.5547 32.5907 38.2129ZM33.0645 23.4375C31.2802 23.4375 29.8387 22.041 29.8387 20.3125C29.8387 18.584 31.2802 17.1875 33.0645 17.1875C34.8488 17.1875 36.2903 18.584 36.2903 20.3125C36.2903 22.041 34.8488 23.4375 33.0645 23.4375Z" fill={fill}/>
        </svg>
    );
} 
export const Tired = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM25 44.5312C13.881 44.5312 4.83871 35.7715 4.83871 25C4.83871 14.2285 13.881 5.46875 25 5.46875C36.119 5.46875 45.1613 14.2285 45.1613 25C45.1613 35.7715 36.119 44.5312 25 44.5312ZM38.0141 14.8633C37.6311 14.4336 36.9758 14.3359 36.4718 14.6191L28.4073 19.3066C28.0444 19.5215 27.8226 19.9023 27.8226 20.3125C27.8226 20.7227 28.0444 21.1035 28.4073 21.3184L36.4718 26.0059C37.0161 26.3184 37.6613 26.1621 38.0141 25.7617C38.3972 25.3223 38.4073 24.6875 38.0242 24.248L34.6371 20.3125L38.0242 16.377C38.4073 15.9375 38.3972 15.293 38.0141 14.8633ZM22.1774 20.3125C22.1774 19.9023 21.9556 19.5215 21.5927 19.3066L13.5282 14.6191C13.0242 14.3262 12.369 14.4336 11.9859 14.8633C11.6028 15.3027 11.5927 15.9375 11.9758 16.377L15.3629 20.3125L11.9758 24.248C11.5927 24.6875 11.6028 25.3223 11.9859 25.7617C12.3387 26.1621 12.9839 26.3184 13.5282 26.0059L21.5927 21.3184C21.9556 21.1035 22.1774 20.7227 22.1774 20.3125ZM25 26.5625C20.4234 26.5625 14.8286 30.3027 14.1331 35.6738C13.9819 36.8262 14.8286 37.7832 15.6956 37.4219C17.9839 36.4746 21.371 35.9375 25 35.9375C28.629 35.9375 32.0161 36.4746 34.3044 37.4219C35.1613 37.7832 36.0181 36.8359 35.8669 35.6738C35.1714 30.3027 29.5766 26.5625 25 26.5625Z" fill={fill}/>
        </svg>
    );
} 
export const Meh = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM25 44.5313C13.881 44.5313 4.83871 35.7715 4.83871 25C4.83871 14.2285 13.881 5.46875 25 5.46875C36.119 5.46875 45.1613 14.2285 45.1613 25C45.1613 35.7715 36.119 44.5313 25 44.5313ZM16.9355 17.1875C15.1512 17.1875 13.7097 18.584 13.7097 20.3125C13.7097 22.041 15.1512 23.4375 16.9355 23.4375C18.7198 23.4375 20.1613 22.041 20.1613 20.3125C20.1613 18.584 18.7198 17.1875 16.9355 17.1875ZM33.0645 17.1875C31.2802 17.1875 29.8387 18.584 29.8387 20.3125C29.8387 22.041 31.2802 23.4375 33.0645 23.4375C34.8488 23.4375 36.2903 22.041 36.2903 20.3125C36.2903 18.584 34.8488 17.1875 33.0645 17.1875Z" fill= {fill}/>
        </svg>
    );
} 
export const Sad = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM25 44.5312C13.881 44.5312 4.83871 35.7715 4.83871 25C4.83871 14.2285 13.881 5.46875 25 5.46875C36.119 5.46875 45.1613 14.2285 45.1613 25C45.1613 35.7715 36.119 44.5312 25 44.5312ZM25.8065 29.6875C24.4758 29.6875 23.3871 30.7422 23.3871 32.0312C23.3871 33.3203 24.4758 34.375 25.8065 34.375C28.2056 34.375 30.4738 35.4004 32.0161 37.1875C32.8327 38.1445 34.3548 38.3496 35.4234 37.4902C36.4516 36.6602 36.5927 35.1855 35.7359 34.1895C33.2661 31.3281 29.6472 29.6875 25.8065 29.6875ZM16.9355 23.4375C18.7198 23.4375 20.1613 22.041 20.1613 20.3125C20.1613 18.584 18.7198 17.1875 16.9355 17.1875C15.1512 17.1875 13.7097 18.584 13.7097 20.3125C13.7097 22.041 15.1512 23.4375 16.9355 23.4375ZM33.0645 17.1875C31.2802 17.1875 29.8387 18.584 29.8387 20.3125C29.8387 22.041 31.2802 23.4375 33.0645 23.4375C34.8488 23.4375 36.2903 22.041 36.2903 20.3125C36.2903 18.584 34.8488 17.1875 33.0645 17.1875ZM16.371 26.8359C15.2218 28.3301 12.7016 31.7773 12.7016 33.4863C12.7016 35.7031 14.5968 37.5 16.9355 37.5C19.2742 37.5 21.1694 35.7031 21.1694 33.4863C21.1694 31.7773 18.6492 28.3301 17.5 26.8359C17.2177 26.4746 16.6532 26.4746 16.371 26.8359Z" fill={fill}/>
        </svg>
    );
} 
export const MehRolling = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM8.87097 21.875C8.87097 19.502 10.252 17.4609 12.2581 16.4062C12.1875 16.6602 12.0968 16.9141 12.0968 17.1875C12.0968 18.916 13.5383 20.3125 15.3226 20.3125C17.1069 20.3125 18.5484 18.916 18.5484 17.1875C18.5484 16.9141 18.4577 16.6602 18.3871 16.4062C20.3931 17.4609 21.7742 19.502 21.7742 21.875C21.7742 25.3223 18.881 28.125 15.3226 28.125C11.7641 28.125 8.87097 25.3223 8.87097 21.875ZM31.4516 39.0625H18.5484C16.4113 39.0625 16.4113 35.9375 18.5484 35.9375H31.4516C33.5887 35.9375 33.5887 39.0625 31.4516 39.0625ZM34.6774 28.125C31.119 28.125 28.2258 25.3223 28.2258 21.875C28.2258 19.502 29.6069 17.4609 31.6129 16.4062C31.5423 16.6602 31.4516 16.9141 31.4516 17.1875C31.4516 18.916 32.8931 20.3125 34.6774 20.3125C36.4617 20.3125 37.9032 18.916 37.9032 17.1875C37.9032 16.9141 37.8125 16.6602 37.7419 16.4062C39.748 17.4609 41.129 19.502 41.129 21.875C41.129 25.3223 38.2359 28.125 34.6774 28.125Z" fill={fill}/>
        </svg>
    );
} 
export const Grimace = ({onClick, fill}) => {
    return (
        <svg onClick = {onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0.78125C11.1895 0.78125 0 11.6211 0 25C0 38.3789 11.1895 49.2188 25 49.2188C38.8105 49.2188 50 38.3789 50 25C50 11.6211 38.8105 0.78125 25 0.78125ZM25 44.5312C13.881 44.5312 4.83871 35.7715 4.83871 25C4.83871 14.2285 13.881 5.46875 25 5.46875C36.119 5.46875 45.1613 14.2285 45.1613 25C45.1613 35.7715 36.119 44.5312 25 44.5312ZM16.9355 23.4375C18.7198 23.4375 20.1613 22.041 20.1613 20.3125C20.1613 18.584 18.7198 17.1875 16.9355 17.1875C15.1512 17.1875 13.7097 18.584 13.7097 20.3125C13.7097 22.041 15.1512 23.4375 16.9355 23.4375ZM33.0645 23.4375C34.8488 23.4375 36.2903 22.041 36.2903 20.3125C36.2903 18.584 34.8488 17.1875 33.0645 17.1875C31.2802 17.1875 29.8387 18.584 29.8387 20.3125C29.8387 22.041 31.2802 23.4375 33.0645 23.4375ZM34.6774 25H15.3226C12.6512 25 10.4839 27.0996 10.4839 29.6875V32.8125C10.4839 35.4004 12.6512 37.5 15.3226 37.5H34.6774C37.3488 37.5 39.5161 35.4004 39.5161 32.8125V29.6875C39.5161 27.0996 37.3488 25 34.6774 25ZM17.7419 34.375H15.3226C14.4355 34.375 13.7097 33.6719 13.7097 32.8125V32.0312H17.7419V34.375ZM17.7419 30.4688H13.7097V29.6875C13.7097 28.8281 14.4355 28.125 15.3226 28.125H17.7419V30.4688ZM24.1935 34.375H19.3548V32.0312H24.1935V34.375ZM24.1935 30.4688H19.3548V28.125H24.1935V30.4688ZM30.6452 34.375H25.8065V32.0312H30.6452V34.375ZM30.6452 30.4688H25.8065V28.125H30.6452V30.4688ZM36.2903 32.8125C36.2903 33.6719 35.5645 34.375 34.6774 34.375H32.2581V32.0312H36.2903V32.8125ZM36.2903 30.4688H32.2581V28.125H34.6774C35.5645 28.125 36.2903 28.8281 36.2903 29.6875V30.4688Z" fill={fill}/>
        </svg>
    );
} 