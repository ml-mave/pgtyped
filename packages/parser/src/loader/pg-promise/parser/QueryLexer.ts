// Generated from src/loader/pg-promise/grammar/QueryLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN.js";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer.js";
import { CharStream } from "antlr4ts/CharStream.js";
import { Lexer } from "antlr4ts/Lexer.js";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator.js";
import { NotNull } from "antlr4ts/Decorators.js";
import { Override } from "antlr4ts/Decorators.js";
import { RuleContext } from "antlr4ts/RuleContext.js";
import { Vocabulary } from "antlr4ts/Vocabulary.js";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl.js";

import * as Utils from "antlr4ts/misc/Utils.js";


export class QueryLexer extends Lexer {
	public static readonly ID = 1;
	public static readonly INTEGER = 2;
	public static readonly PARAM_MARK = 3;
	public static readonly COMMA = 4;
	public static readonly OB = 5;
	public static readonly CB = 6;
	public static readonly NULLABILITY_MARK = 7;
	public static readonly FORMATTER_MARK = 8;
	public static readonly FORMATTER_SHORT = 9;
	public static readonly LINE_COMMENT = 10;
	public static readonly WORD = 11;
	public static readonly SPECIAL = 12;
	public static readonly EOF_STATEMENT = 13;
	public static readonly WSL = 14;
	public static readonly STRING = 15;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"QUOT", "ID", "INTEGER", "NOT_LF", "SID", "SINTEGER", "PARAM_MARK", "COMMA", 
		"OB", "CB", "NULLABILITY_MARK", "FORMATTER_MARK", "FORMATTER_SHORT", "LINE_COMMENT", 
		"WORD", "SPECIAL", "EOF_STATEMENT", "WSL", "STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'$'", "','", "'('", "')'", "'/*nullable*/'", 
		"':'", undefined, undefined, undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "INTEGER", "PARAM_MARK", "COMMA", "OB", "CB", "NULLABILITY_MARK", 
		"FORMATTER_MARK", "FORMATTER_SHORT", "LINE_COMMENT", "WORD", "SPECIAL", 
		"EOF_STATEMENT", "WSL", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QueryLexer._LITERAL_NAMES, QueryLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return QueryLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(QueryLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "QueryLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return QueryLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return QueryLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return QueryLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return QueryLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11\x82\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03" +
		".\n\x03\f\x03\x0E\x031\v\x03\x03\x04\x06\x044\n\x04\r\x04\x0E\x045\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F_\n\x0F\f\x0F" +
		"\x0E\x0Fb\v\x0F\x03\x10\x06\x10e\n\x10\r\x10\x0E\x10f\x03\x11\x06\x11" +
		"j\n\x11\r\x11\x0E\x11k\x03\x12\x03\x12\x03\x13\x06\x13q\n\x13\r\x13\x0E" +
		"\x13r\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14z\n\x14\f\x14\x0E" +
		"\x14}\v\x14\x03\x14\x03\x14\x05\x14\x81\n\x14\x03{\x02\x02\x15\x03\x02" +
		"\x02\x05\x02\x03\x07\x02\x04\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x05" +
		"\x11\x02\x06\x13\x02\x07\x15\x02\b\x17\x02\t\x19\x02\n\x1B\x02\v\x1D\x02" +
		"\f\x1F\x02\r!\x02\x0E#\x02\x0F%\x02\x10\'\x02\x11\x03\x02\n\x05\x02C\\" +
		"aac|\x06\x022;C\\aac|\x03\x022;\x03\x02\f\f\x05\x02%%``\x80\x80\x10\x02" +
		"#%\'),-/1<<>B]]_`bb}\x80\xC6\xC7\xD8\xD8\xE6\xE7\xF8\xF8\x05\x02\v\f\x0F" +
		"\x0F\"\"\x03\x02^^\x02\x85\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
		"\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
		"\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'" +
		"\x03\x02\x02\x02\x03)\x03\x02\x02\x02\x05+\x03\x02\x02\x02\x073\x03\x02" +
		"\x02\x02\t7\x03\x02\x02\x02\v9\x03\x02\x02\x02\r=\x03\x02\x02\x02\x0F" +
		"A\x03\x02\x02\x02\x11C\x03\x02\x02\x02\x13E\x03\x02\x02\x02\x15G\x03\x02" +
		"\x02\x02\x17I\x03\x02\x02\x02\x19V\x03\x02\x02\x02\x1BX\x03\x02\x02\x02" +
		"\x1DZ\x03\x02\x02\x02\x1Fd\x03\x02\x02\x02!i\x03\x02\x02\x02#m\x03\x02" +
		"\x02\x02%p\x03\x02\x02\x02\'v\x03\x02\x02\x02)*\x07)\x02\x02*\x04\x03" +
		"\x02\x02\x02+/\t\x02\x02\x02,.\t\x03\x02\x02-,\x03\x02\x02\x02.1\x03\x02" +
		"\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x06\x03\x02\x02\x021/\x03" +
		"\x02\x02\x0224\t\x04\x02\x0232\x03\x02\x02\x0245\x03\x02\x02\x0253\x03" +
		"\x02\x02\x0256\x03\x02\x02\x026\b\x03\x02\x02\x0278\n\x05\x02\x028\n\x03" +
		"\x02\x02\x029:\x05\x05\x03\x02:;\x03\x02\x02\x02;<\b\x06\x02\x02<\f\x03" +
		"\x02\x02\x02=>\x05\x07\x04\x02>?\x03\x02\x02\x02?@\b\x07\x03\x02@\x0E" +
		"\x03\x02\x02\x02AB\x07&\x02\x02B\x10\x03\x02\x02\x02CD\x07.\x02\x02D\x12" +
		"\x03\x02\x02\x02EF\x07*\x02\x02F\x14\x03\x02\x02\x02GH\x07+\x02\x02H\x16" +
		"\x03\x02\x02\x02IJ\x071\x02\x02JK\x07,\x02\x02KL\x07p\x02\x02LM\x07w\x02" +
		"\x02MN\x07n\x02\x02NO\x07n\x02\x02OP\x07c\x02\x02PQ\x07d\x02\x02QR\x07" +
		"n\x02\x02RS\x07g\x02\x02ST\x07,\x02\x02TU\x071\x02\x02U\x18\x03\x02\x02" +
		"\x02VW\x07<\x02\x02W\x1A\x03\x02\x02\x02XY\t\x06\x02\x02Y\x1C\x03\x02" +
		"\x02\x02Z[\x07/\x02\x02[\\\x07/\x02\x02\\`\x03\x02\x02\x02]_\x05\t\x05" +
		"\x02^]\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02" +
		"\x02a\x1E\x03\x02\x02\x02b`\x03\x02\x02\x02ce\t\x03\x02\x02dc\x03\x02" +
		"\x02\x02ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g \x03\x02" +
		"\x02\x02hj\t\x07\x02\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02" +
		"\x02\x02kl\x03\x02\x02\x02l\"\x03\x02\x02\x02mn\x07=\x02\x02n$\x03\x02" +
		"\x02\x02oq\t\b\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02" +
		"\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02tu\b\x13\x04\x02u&\x03\x02\x02" +
		"\x02v\x80\x05\x03\x02\x02w\x81\x05\x03\x02\x02xz\x05\t\x05\x02yx\x03\x02" +
		"\x02\x02z}\x03\x02\x02\x02{|\x03\x02\x02\x02{y\x03\x02\x02\x02|~\x03\x02" +
		"\x02\x02}{\x03\x02\x02\x02~\x7F\n\t\x02\x02\x7F\x81\x05\x03\x02\x02\x80" +
		"w\x03\x02\x02\x02\x80{\x03\x02\x02\x02\x81(\x03\x02\x02\x02\v\x02/5`f" +
		"kr{\x80\x05\t\x03\x02\t\x04\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QueryLexer.__ATN) {
			QueryLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QueryLexer._serializedATN));
		}

		return QueryLexer.__ATN;
	}

}

