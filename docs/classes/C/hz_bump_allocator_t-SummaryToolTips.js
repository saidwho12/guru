﻿NDSummary.OnToolTipsLoaded("CClass:hz_bump_allocator_t",{13:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype13\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">typedef</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">hz_bump_allocator_t</div></div></div><div class=\"TTSummary\">A bump allocator, meant to be used on a temporary stack buffer.&nbsp; The blocks are allocated and stored on the multiple of their size rounded to a power of two.&nbsp; Another name for this is &quot;monotonic allocator&quot;.</div></div>",15:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE <span class=\"SHKeyword\">void</span> * hz_bump_allocator_alloc(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_bump_allocator_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Allocates new block of memory, and pushes pointer forward.&nbsp; Blocks are allocated on the multiple of the size rounded up to the next power of two.</div></div>",16:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE <span class=\"SHKeyword\">void</span> hz_bump_allocator_free(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_bump_allocator_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">void</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">p</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Frees a previously allocated block. (currently a no-op)</div></div>",17:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">HZ_INLINE <span class=\"SHKeyword\">void</span> hz_bump_allocator_release(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">hz_bump_allocator_t&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">a</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Releases all resources held by the allocator. (currently a no-op)</div></div>"});