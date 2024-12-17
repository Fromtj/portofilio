import Link from "next/link"

export default function Header() {
    return(<>
    <header className="max-w-7xl m-auto flex justify-between items-center py-[20px] xs:px-[15px]">
        <div>
        <svg width="97" height="59" viewBox="0 0 97 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_103_205)">
<path d="M12.5581 0V3.83066C11.5028 3.83066 10.6796 3.98157 10.0882 4.28338C9.49679 4.57357 9.24169 5.15977 9.32287 6.04199L9.86206 11.1785C10.0012 12.4786 9.85626 13.5292 9.42722 14.3301C9.00978 15.131 8.36623 15.7464 7.49655 16.1758C6.63848 16.5938 5.62386 16.8897 4.45271 17.0638C5.69343 17.2495 6.74284 17.5514 7.60092 17.9693C8.45899 18.3871 9.08516 18.9907 9.47941 19.7801C9.87366 20.5695 10.0012 21.6258 9.86206 22.9492L9.32287 28.0857C9.24169 28.9679 9.49679 29.5541 10.0882 29.8443C10.6796 30.146 11.5028 30.297 12.5581 30.297V34.1277C9.35765 34.1277 7.1081 33.6401 5.80939 32.6651C4.52229 31.7016 4.00048 30.0475 4.24398 27.7026L4.76579 22.7227C4.85856 21.8406 4.70782 21.1499 4.31357 20.6507C3.93091 20.1516 3.36272 19.8033 2.60901 19.6059C1.85529 19.3971 0.985626 19.2926 0 19.2926V14.8351C0.97403 14.8351 1.8379 14.7364 2.59162 14.5391C3.34533 14.3301 3.91932 13.9761 4.31357 13.477C4.70782 12.9778 4.85856 12.2871 4.76579 11.4049L4.24398 6.45987C3.98889 4.06861 4.51068 2.39706 5.80939 1.4452C7.1081 0.481734 9.35765 0 12.5581 0Z" fill="url(#paint0_linear_103_205)"/>
<path d="M27.633 4.50977C30.5087 4.50977 32.6771 5.62414 34.1381 7.85288C35.6108 10.07 36.3471 13.1636 36.3471 17.1335C36.3471 21.115 35.6108 24.2318 34.1381 26.4838C32.6771 28.7242 30.5087 29.8443 27.633 29.8443C24.7341 29.8443 22.5541 28.7242 21.0931 26.4838C19.6436 24.2318 18.9189 21.115 18.9189 17.1335C18.9189 13.1636 19.6436 10.07 21.0931 7.85288C22.5541 5.62414 24.7341 4.50977 27.633 4.50977ZM27.633 8.49713C26.4039 8.49713 25.5052 9.15879 24.937 10.4821C24.3688 11.7938 24.0847 14.0109 24.0847 17.1335C24.0847 18.1551 24.1022 19.0663 24.1369 19.8672C24.1718 20.6566 24.224 21.3589 24.2935 21.9741L30.1724 9.66374C29.8942 9.22264 29.5463 8.92083 29.1288 8.75831C28.723 8.5842 28.2244 8.49713 27.633 8.49713ZM31.1464 17.1335C31.1464 15.7986 31.1175 14.6726 31.0595 13.7555L25.511 25.2302C25.7661 25.4739 26.0676 25.6422 26.4154 25.7351C26.7749 25.8279 27.1807 25.8744 27.633 25.8744C28.4563 25.8744 29.1231 25.5958 29.6332 25.0387C30.1551 24.4815 30.5377 23.5644 30.7812 22.2875C31.0248 20.999 31.1464 19.281 31.1464 17.1335Z" fill="url(#paint1_linear_103_205)"/>
<path d="M48.5 4.50977C51.3757 4.50977 53.5441 5.62414 55.0051 7.85288C56.4778 10.07 57.214 13.1636 57.214 17.1335C57.214 21.115 56.4778 24.2318 55.0051 26.4838C53.5441 28.7242 51.3757 29.8443 48.5 29.8443C45.601 29.8443 43.4211 28.7242 41.9601 26.4838C40.5106 24.2318 39.7859 21.115 39.7859 17.1335C39.7859 13.1636 40.5106 10.07 41.9601 7.85288C43.4211 5.62414 45.601 4.50977 48.5 4.50977ZM48.5 8.49713C47.2709 8.49713 46.3722 9.15879 45.804 10.4821C45.2359 11.7938 44.9518 14.0109 44.9518 17.1335C44.9518 18.1551 44.9692 19.0663 45.0039 19.8672C45.0387 20.6566 45.0909 21.3589 45.1605 21.9741L51.0394 9.66374C50.7611 9.22264 50.4132 8.92083 49.9959 8.75831C49.5899 8.5842 49.0913 8.49713 48.5 8.49713ZM52.0135 17.1335C52.0135 15.7986 51.9845 14.6726 51.9265 13.7555L46.378 25.2302C46.633 25.4739 46.9346 25.6422 47.2825 25.7351C47.642 25.8279 48.0478 25.8744 48.5 25.8744C49.3233 25.8744 49.99 25.5958 50.5003 25.0387C51.022 24.4815 51.4047 23.5644 51.6482 22.2875C51.8917 20.999 52.0135 19.281 52.0135 17.1335Z" fill="url(#paint2_linear_103_205)"/>
<path d="M68.1146 29.8095L62.8966 28.1902L71.889 9.26321H61.2964V5.11914H77.4549V8.84532L68.1146 29.8095Z" fill="url(#paint3_linear_103_205)"/>
<path d="M84.442 0C87.6423 0 89.8861 0.481734 91.1733 1.4452C92.472 2.40867 92.9996 4.06862 92.7561 6.42505L92.2342 11.4049C92.1414 12.2871 92.2922 12.9778 92.6865 13.477C93.0807 13.9761 93.6488 14.3301 94.391 14.5391C95.1447 14.7364 96.0144 14.8351 97 14.8351V19.2926C96.026 19.2926 95.1622 19.3971 94.4084 19.6059C93.6547 19.8033 93.0807 20.1516 92.6865 20.6507C92.2922 21.1499 92.1414 21.8406 92.2342 22.7227L92.7561 27.6678C93.0228 30.0475 92.5009 31.719 91.1906 32.6824C89.8919 33.646 87.6423 34.1277 84.442 34.1277V30.297C85.5088 30.297 86.3379 30.146 86.9292 29.8443C87.5207 29.5541 87.7699 28.9679 87.6772 28.0857L87.1379 22.9492C86.9988 21.6374 87.1379 20.5868 87.5554 19.7976C87.9844 18.9965 88.6338 18.3871 89.5035 17.9693C90.3731 17.5397 91.3935 17.238 92.5647 17.0638C91.3239 16.8781 90.2688 16.5763 89.3991 16.1584C88.541 15.7405 87.9149 15.1369 87.5207 14.3476C87.1264 13.5466 86.9988 12.4903 87.1379 11.1785L87.6772 6.04199C87.7699 5.15977 87.5148 4.57357 86.9119 4.28338C86.3204 3.98157 85.4972 3.83066 84.442 3.83066V0Z" fill="url(#paint4_linear_103_205)"/>
<path d="M12.2745 42.162C13.2416 42.162 14.0208 42.4023 14.6121 42.8829C15.2036 43.3634 15.6349 44.0425 15.9063 44.9201C16.1845 45.7976 16.3238 46.8388 16.3238 48.0438C16.3238 49.1861 16.1568 50.2064 15.8228 51.1048C15.4888 51.9963 15.0053 52.6998 14.3722 53.2151C13.739 53.7237 12.9703 53.9778 12.0658 53.9778C10.9874 53.9778 10.1108 53.5913 9.43591 52.8181V57.906L6.13812 58.2508V42.5277H9.06022L9.20633 43.7708C9.65856 43.1928 10.1525 42.7819 10.6882 42.5381C11.224 42.2874 11.7527 42.162 12.2745 42.162ZM11.2518 44.5962C10.8691 44.5962 10.5317 44.7112 10.2395 44.941C9.94729 45.1707 9.67942 45.4842 9.43591 45.8812V50.5616C9.66551 50.9028 9.90554 51.1536 10.156 51.3137C10.4134 51.4739 10.7161 51.554 11.0639 51.554C11.6484 51.554 12.1041 51.2894 12.4311 50.76C12.7581 50.2237 12.9215 49.3323 12.9215 48.0856C12.9215 47.1662 12.8555 46.4558 12.7232 45.9543C12.5911 45.446 12.3998 45.0942 12.1493 44.8992C11.8988 44.6971 11.5997 44.5962 11.2518 44.5962Z" fill="url(#paint5_linear_103_205)"/>
<path d="M27.9882 50.4258C27.9882 50.8436 28.0438 51.1466 28.1552 51.3346C28.2734 51.5227 28.4613 51.6655 28.7186 51.763L28.0404 53.9361C27.3863 53.8734 26.8333 53.7305 26.3809 53.5077C25.9357 53.2778 25.5844 52.9331 25.3269 52.4735C24.9026 52.9818 24.3599 53.3614 23.6989 53.6122C23.038 53.8559 22.3632 53.9778 21.6743 53.9778C20.5333 53.9778 19.6219 53.654 18.94 53.0062C18.2652 52.3515 17.9278 51.5123 17.9278 50.4885C17.9278 49.2835 18.3974 48.3537 19.3366 47.699C20.2828 47.0444 21.6117 46.717 23.3232 46.717H24.8155V46.2991C24.8155 45.1639 24.0851 44.5962 22.6239 44.5962C22.2692 44.5962 21.8134 44.6485 21.2569 44.7529C20.7003 44.8504 20.1437 44.9931 19.5871 45.1812L18.8252 42.9874C19.5419 42.7157 20.2864 42.5102 21.0586 42.3709C21.8378 42.2317 22.5336 42.162 23.1458 42.162C24.7947 42.162 26.0122 42.4998 26.7984 43.1753C27.5916 43.844 27.9882 44.8121 27.9882 46.0797V50.4258ZM22.8118 51.6167C23.1667 51.6167 23.5389 51.5123 23.9285 51.3033C24.3181 51.0875 24.6138 50.7845 24.8155 50.3945V48.5975H24.0016C23.0832 48.5975 22.4083 48.7402 21.977 49.0258C21.5456 49.3044 21.3299 49.7153 21.3299 50.2586C21.3299 50.6834 21.4586 51.0178 21.7161 51.2615C21.9804 51.4984 22.3457 51.6167 22.8118 51.6167Z" fill="url(#paint6_linear_103_205)"/>
<path d="M41.6355 42.5277L37.9411 53.6227H34.0589L30.3227 42.5277H33.8815L36.0418 51.0944L38.2958 42.5277H41.6355Z" fill="url(#paint7_linear_103_205)"/>
<path d="M53.0285 50.4258C53.0285 50.8436 53.0842 51.1466 53.1955 51.3346C53.3138 51.5227 53.5016 51.6655 53.759 51.763L53.0807 53.9361C52.4267 53.8734 51.8736 53.7305 51.4214 53.5077C50.9761 53.2778 50.6248 52.9331 50.3673 52.4735C49.943 52.9818 49.4003 53.3614 48.7393 53.6122C48.0784 53.8559 47.4035 53.9778 46.7147 53.9778C45.5737 53.9778 44.6622 53.654 43.9804 53.0062C43.3056 52.3515 42.9682 51.5123 42.9682 50.4885C42.9682 49.2835 43.4378 48.3537 44.377 47.699C45.3232 47.0444 46.6521 46.717 48.3636 46.717H49.8559V46.2991C49.8559 45.1639 49.1255 44.5962 47.6644 44.5962C47.3096 44.5962 46.8538 44.6485 46.2972 44.7529C45.7407 44.8504 45.1841 44.9931 44.6275 45.1812L43.8657 42.9874C44.5823 42.7157 45.3267 42.5102 46.0989 42.3709C46.8782 42.2317 47.5739 42.162 48.1862 42.162C49.835 42.162 51.0526 42.4998 51.8388 43.1753C52.6319 43.844 53.0285 44.8121 53.0285 46.0797V50.4258ZM47.8522 51.6167C48.207 51.6167 48.5793 51.5123 48.9689 51.3033C49.3585 51.0875 49.6542 50.7845 49.8559 50.3945V48.5975H49.042C48.1235 48.5975 47.4487 48.7402 47.0174 49.0258C46.586 49.3044 46.3703 49.7153 46.3703 50.2586C46.3703 50.6834 46.4991 51.0178 46.7565 51.2615C47.0208 51.4984 47.3861 51.6167 47.8522 51.6167Z" fill="url(#paint8_linear_103_205)"/>
<path d="M56.2189 53.6226V42.5277H59.0993L59.3289 43.8126C59.8229 43.2555 60.3446 42.8411 60.8943 42.5695C61.4439 42.2978 62.0701 42.162 62.7728 42.162C63.7189 42.162 64.4634 42.451 65.0061 43.0292C65.5487 43.6072 65.82 44.4221 65.82 45.4737V53.6226H62.5223V46.4245C62.5223 45.7419 62.4458 45.2683 62.2927 45.0036C62.1466 44.732 61.8683 44.5962 61.4577 44.5962C61.1099 44.5962 60.776 44.7076 60.4559 44.9306C60.1428 45.1534 59.8297 45.4633 59.5168 45.8603V53.6226H56.2189Z" fill="url(#paint9_linear_103_205)"/>
<path d="M76.9314 42.162C77.7175 42.162 78.2985 42.4197 78.6742 42.9351C79.0568 43.4435 79.2481 44.2689 79.2481 45.411V53.6226H76.42V45.7872C76.42 45.3972 76.3817 45.1221 76.3052 44.9619C76.2356 44.8016 76.0895 44.7216 75.8669 44.7216C75.693 44.7216 75.512 44.7738 75.3242 44.8783C75.1433 44.9758 74.9416 45.1639 74.719 45.4424V53.6226H72.4022V45.7872C72.4022 45.3972 72.3638 45.1221 72.2873 44.9619C72.2177 44.8016 72.0716 44.7216 71.849 44.7216C71.6751 44.7216 71.4942 44.7738 71.3063 44.8783C71.1254 44.9758 70.9237 45.1639 70.7011 45.4424V53.6226H67.8311V42.5277H70.2523L70.4715 43.6037C70.8193 43.1301 71.1707 42.7714 71.5255 42.5277C71.8803 42.2839 72.3012 42.162 72.7883 42.162C73.2057 42.162 73.5605 42.2699 73.8527 42.4859C74.152 42.6948 74.3641 43.0256 74.4894 43.4783C74.8233 43.0883 75.1921 42.7714 75.5955 42.5277C75.9991 42.2839 76.4443 42.162 76.9314 42.162Z" fill="url(#paint10_linear_103_205)"/>
<path d="M91.1004 40.7517L91.8728 43.1754C91.4832 43.3287 91.0274 43.4401 90.5057 43.5097C89.9838 43.5794 89.3751 43.6142 88.6794 43.6142C89.3751 43.9137 89.9038 44.2863 90.2656 44.7321C90.6344 45.1708 90.8187 45.7489 90.8187 46.4664C90.8187 47.1837 90.6274 47.8245 90.2448 48.3886C89.862 48.9458 89.3195 49.3846 88.6168 49.705C87.9141 50.0254 87.0826 50.1856 86.1225 50.1856C85.6633 50.1856 85.2354 50.1438 84.8389 50.0602C84.7205 50.1229 84.6302 50.2133 84.5676 50.3318C84.5049 50.4502 84.4736 50.5721 84.4736 50.6975C84.4736 50.8716 84.5431 51.0283 84.6824 51.1675C84.8285 51.3069 85.1659 51.3765 85.6946 51.3765H87.5105C88.3732 51.3765 89.1176 51.5158 89.7438 51.7944C90.3769 52.0729 90.8674 52.4526 91.2153 52.9331C91.5631 53.4137 91.7371 53.964 91.7371 54.5839C91.7371 55.7191 91.2397 56.6141 90.2448 57.2688C89.2498 57.9234 87.7714 58.2509 85.8094 58.2509C84.3901 58.2509 83.2908 58.1046 82.5117 57.812C81.7393 57.5265 81.2002 57.1156 80.8941 56.5792C80.5949 56.0499 80.4453 55.4196 80.4453 54.6882H83.3673C83.3673 55.0087 83.43 55.2699 83.5552 55.4718C83.6874 55.6808 83.9344 55.8341 84.2962 55.9315C84.6649 56.029 85.1972 56.0778 85.8929 56.0778C86.5956 56.0778 87.1313 56.022 87.5 55.9107C87.8688 55.7992 88.1192 55.646 88.2515 55.4509C88.3906 55.2629 88.4602 55.0505 88.4602 54.8136C88.4602 54.4863 88.3314 54.2217 88.0741 54.0197C87.8166 53.8177 87.4097 53.7167 86.853 53.7167H85.0893C83.8926 53.7167 83.0229 53.4973 82.4803 53.0585C81.9376 52.6128 81.6663 52.0938 81.6663 51.5019C81.6663 51.091 81.7741 50.701 81.9898 50.3318C82.2124 49.9627 82.5221 49.6527 82.9187 49.402C82.209 49.0258 81.701 48.5836 81.3949 48.0752C81.0888 47.5598 80.9358 46.9434 80.9358 46.226C80.9358 45.3902 81.148 44.6729 81.5724 44.0739C81.9968 43.4679 82.5811 43.0013 83.3256 42.674C84.077 42.3467 84.9329 42.1829 85.8929 42.1829C86.7208 42.1968 87.441 42.1412 88.0532 42.0158C88.6654 41.8834 89.2151 41.7059 89.7021 41.4829C90.189 41.2531 90.6552 41.0093 91.1004 40.7517ZM85.9764 44.3246C85.4546 44.3246 85.0406 44.4918 84.7345 44.8262C84.4283 45.1535 84.2753 45.6062 84.2753 46.1843C84.2753 46.7971 84.4319 47.2673 84.745 47.5946C85.058 47.9219 85.4686 48.0857 85.9764 48.0857C87.1034 48.0857 87.667 47.4379 87.667 46.1425C87.667 44.9306 87.1034 44.3246 85.9764 44.3246Z" fill="url(#paint11_linear_103_205)"/>
</g>
<defs>
<linearGradient id="paint0_linear_103_205" x1="-2.05005" y1="36.7549" x2="99.9719" y2="0.679714" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C0FD"/>
<stop offset="1" stop-color="#E70FAA"/>
</linearGradient>
<linearGradient id="paint1_linear_103_205" x1="-2.05007" y1="36.755" x2="99.9719" y2="0.679755" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C0FD"/>
<stop offset="1" stop-color="#E70FAA"/>
</linearGradient>
<linearGradient id="paint2_linear_103_205" x1="-2.05007" y1="36.755" x2="99.9719" y2="0.679757" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C0FD"/>
<stop offset="1" stop-color="#E70FAA"/>
</linearGradient>
<linearGradient id="paint3_linear_103_205" x1="-2.05005" y1="36.7549" x2="99.9719" y2="0.679708" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C0FD"/>
<stop offset="1" stop-color="#E70FAA"/>
</linearGradient>
<linearGradient id="paint4_linear_103_205" x1="-2.05002" y1="36.7549" x2="99.972" y2="0.679722" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C0FD"/>
<stop offset="1" stop-color="#E70FAA"/>
</linearGradient>
<linearGradient id="paint5_linear_103_205" x1="-0.24442" y1="59.3454" x2="93.6381" y2="39.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<linearGradient id="paint6_linear_103_205" x1="-0.244449" y1="59.3454" x2="93.638" y2="39.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<linearGradient id="paint7_linear_103_205" x1="-0.244431" y1="59.3454" x2="93.6381" y2="39.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<linearGradient id="paint8_linear_103_205" x1="-0.24443" y1="59.3454" x2="93.638" y2="39.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<linearGradient id="paint9_linear_103_205" x1="-0.244434" y1="59.3454" x2="93.6381" y2="39.5068" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<linearGradient id="paint10_linear_103_205" x1="-0.244412" y1="59.3454" x2="93.638" y2="39.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<linearGradient id="paint11_linear_103_205" x1="-0.244413" y1="59.3454" x2="93.6381" y2="39.5069" gradientUnits="userSpaceOnUse">
<stop stop-color="#13B0F5"/>
<stop offset="1" stop-color="#CA24B4"/>
</linearGradient>
<clipPath id="clip0_103_205">
<rect width="97" height="59" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
        <div className="flex gap-[20px] items-center">
          <Link href={'https://github.com/Fromtj'}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="#666666"/>
</svg>
            </Link>  
            <Link href={'https://t.me/laurie_laurence'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 240 240" fill="none">
  <circle cx="120" cy="120" r="120" fill="gray"/>
  <path d="M48.5 119.9L184.4 65.3C190.3 63 194.3 66.3 192.4 73.7L164.3 180.2C162.8 186.4 158.9 187.8 153.3 184.7L112.4 154.9L91.1 173.9C89.2 175.8 87.8 177.2 84.2 177.2L88.6 137.2L155.4 84.9C158.3 82.8 155.2 81.5 151.7 83.6L74.2 128.3L35.8 115.4C29.7 113.4 29.6 109.7 37.4 106.7L48.5 119.9Z" fill="white"/>
</svg>
            </Link>
            <Link href={'https://www.linkedin.com/in/%D1%88%D0%BE%D0%B1%D1%83%D0%B4%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0-%D0%BA%D0%B8%D0%B1%D1%80%D0%B8%D1%91-374051335/'}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_103_225)">
<path d="M15 0.599976C7.04698 0.599976 0.599976 7.04698 0.599976 15C0.599976 22.953 7.04698 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55898V11.5845H11.475V20.9685ZM9.99898 10.4325C9.07798 10.4325 8.48248 9.77997 8.48248 8.97297C8.48248 8.14948 9.09598 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99898 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" fill="#666666"/>
</g>
<defs>
<clipPath id="clip0_103_225">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
            </Link>
        </div>
    </header>
    </>)
}